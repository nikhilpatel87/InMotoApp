import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../components/movieState';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import ScrollTop from '../components/ScrollTop';

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	//useEffect
	useEffect(() => {
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentMovie[0]);
		console.log(setMovies);
	}, [movies, url]);
	return (
		<>
			{movie && (
				<Details
					variants={pageAnimation}
					initial='hidden'
					animate='show'
					exit='exit'>
					<Headline>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt='movie' />
					</Headline>
					<Awards>
						{movie.awards.map((award) => (
							<Award
								title={award.title}
								description={award.description}
								key={award.title}
							/>
						))}
					</Awards>
					<ImageDisplay>
						<img src={movie.secondaryImg} alt='movie' />
					</ImageDisplay>
				</Details>
			)}
			<ScrollTop />
		</>
	);
};

const Details = styled(motion.div)`
	color: white;
	@media (max-width: 1300px) {
		padding: 1rem 0rem;
	}
`;

const Headline = styled.div`
	min-height: 90vh;
	padding-top: 20vh;
	position: relative;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
		color: #23d997;
	}
	img {
		width: 100%;
		height: 110vh;
		object-fit: cover;
		padding-top: 1rem;
	}
	@media screen and (max-width: 1300px) {
		img {
			width: 100%;
			height: auto;
		}
	}
`;

const Awards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5 rem 10 rem;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 1300px) {
		display: block;
		margin: 0rem 2rem;
	}
`;

const AwardStyle = styled.div`
	padding: 5rem;
	h3 {
		font-size: 2rem;
	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
	p {
		padding: 2rem 0rem;
	}
`;

const ImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 120vh;
		object-fit: cover;
	}
	@media screen and (max-width: 1300px) {
		img {
			width: 100%;
			height: auto;
		}
	}
`;

//Award Component
const Award = ({ title, description }) => {
	return (
		<AwardStyle>
			<h3>{title}</h3>
			<div className='line'></div>
			<p>{description}</p>
		</AwardStyle>
	);
};

export default MovieDetail;
