import React from 'react';
import home1 from '../img/home1.png';
// import styled from 'styled-components';
import { Layout, Description, Image, Hide } from '../styles';
//import framer motion
import { motion } from 'framer-motion';

const AboutSection = () => {
	return (
		<Layout>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>true.</motion.h2>
					</Hide>
				</motion.div>
				<p>
					Contact us for any photography or videography ideas you may have. We
					have professionals ready to make your ideas a reality!
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={home1} alt='camera man' />
			</Image>
		</Layout>
	);
};

export default AboutSection;
