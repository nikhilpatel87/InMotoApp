import React from 'react';

const FaqSection = () => {
	return (
		<div className='faq'>
			<h2>
				Any Questions? <span>FAQ</span>
			</h2>
			<div className='question'>
				<h4>How Do I Start?</h4>
				<div className='answer'>
					<p>Loren ipsum dolor sit amet</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
						nisi nisl. Praesent vitae ante rhoncus, ornare orci ut, condimentum.
					</p>
				</div>
			</div>

			<div className='question'>
				<h4>What Does A Project Schedule Look Like?</h4>
				<div className='answer'>
					<p>Nunc tristique nunc eget augue vulputate gravida.</p>
					<p>
						Phasellus venenatis egestas mauris vitae semper. Mauris eu varius
						lacus. Vestibulum est purus, rhoncus id vestibulum ac, malesuada a
						ipsum. Fusce vestibulum lacus sit.
					</p>
				</div>
			</div>

			<div className='question'>
				<h4>How much do your services cost?</h4>
				<div className='answer'>
					<p>Mauris in tristique justo. Orci varius natoque penatibus.</p>
					<p>
						Etiam sodales enim ex, facilisis sagittis magna rutrum nec.
						Phasellus pulvinar, tellus id condimentum.
					</p>
				</div>
			</div>

			<div className='question'>
				<h4>Are there any location limitations?</h4>
				<div className='answer'>
					<p>Nam nec facilisis turpis. Aliquam tristique quis urna vel.</p>
					<p>
						Donec feugiat feugiat ex ac scelerisque. Integer aliquet porttitor
						pretium. Fusce varius mauris et dui tempus, quis.
					</p>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
