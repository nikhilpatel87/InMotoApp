import React from 'react';
import home1 from '../img/home1.png';
// import styled from 'styled-components';
import { Layout, Description, Image, Hide } from '../styles';
//import framer motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
	return (
		<Layout>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>

					<Hide>
						<motion.h2 variants={titleAnim}>true.</motion.h2>
					</Hide>
				</motion.div>

				<motion.p variants={fade}>
					Contact us for any photography or videography ideas you may have. We
					have professionals ready to make your ideas a reality!
				</motion.p>
				<motion.button variants={fade}>Contact Us</motion.button>
			</Description>

			<Image>
				<motion.img src={home1} alt='camera man' variants={photoAnim} />
			</Image>
			<Wave />
		</Layout>
	);
};

export default AboutSection;
