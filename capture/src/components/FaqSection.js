import React from 'react';
import styled from 'styled-components';
import { Layout } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {
	return (
		<Faq>
			<h2>
				Any Questions? <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title='How Do I Start?'>
					<div className='answer'>
						<p>Loren ipsum dolor sit amet</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
							nisi nisl. Praesent vitae ante rhoncus, ornare orci ut,
							condimentum.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
			<AnimateSharedLayout>
				<Toggle title='What Does A Project Schedule Look Like?'>
					<div className='answer'>
						<p>Nunc tristique nunc eget augue vulputate gravida.</p>
						<p>
							Phasellus venenatis egestas mauris vitae semper. Mauris eu varius
							lacus. Vestibulum est purus, rhoncus id vestibulum ac, malesuada a
							ipsum. Fusce vestibulum lacus sit.
							<br /> Curabitur interdum dignissim massa. Donec convallis
							tincidunt diam, pretium accumsan leo viverra nec. Mauris ac augue
							vel justo laoreet euismod at et orci. Donec lacinia, lectus ac
							tincidunt placerat, dolor turpis rutrum arcu, vitae molestie sem
							massa id lorem.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
			<AnimateSharedLayout>
				<Toggle title='How Much Do Your Services Cost?'>
					<div className='answer'>
						<p>Mauris in tristique justo. Orci varius natoque penatibus.</p>
						<p>
							Etiam sodales enim ex, facilisis sagittis magna rutrum nec.
							Phasellus pulvinar, tellus id condimentum.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
			<AnimateSharedLayout>
				<Toggle title='Are There Any Location Limitations?'>
					<div className='answer'>
						<p>Nam nec facilisis turpis. Aliquam tristique quis urna vel.</p>
						<p>
							Donec feugiat feugiat ex ac scelerisque. Integer aliquet porttitor
							pretium. Fusce varius mauris et dui tempus, quis.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
};

const Faq = styled(Layout)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #23d997;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;
