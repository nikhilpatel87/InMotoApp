import React from 'react';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim, lineAnim } from '../animation';

import styled from 'styled-components';

const ContactUs = () => {
	return (
		<ContactStyle
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			style={{ background: '#fff' }}>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get In Touch.</motion.h2>
				</Hide>
				<motion.div className='line' variants={lineAnim}></motion.div>
			</Title>

			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send Us A Message</h2>
					</Social>
				</Hide>

				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Tweet Us</h2>
					</Social>
				</Hide>

				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Check Out Our Instagram</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media (max-width: 1500px) {
		padding: 1rem 1rem;
		font-size: 2rem;
	}
`;

const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
		margin-top: 1rem;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #23d997;
	@media (max-width: 1300px) {
		padding: 0rem 1.5rem;
	}
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
	@media (max-width: 1300px) {
		padding: 1rem 2rem;
	}
`;

export default ContactUs;
