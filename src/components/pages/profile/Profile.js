import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
 

export default function Profile() {
	const ImgProfile = 'https://avatars.githubusercontent.com/u/33586465?v=4';
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
					<span className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</span>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Lucas Freitas da Rocha
					</span>
					<p>Backend Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<a href="https://github.com/LucasFreitasRocha" target="_blank">
						<i className='fab fa-github grey-text text-darken-4 social_style'></i>
						</a>
						<a href="https://www.linkedin.com/in/devrocha/" target="_blank">
						<i className='fab fa-linkedin grey-text text-darken-4 social_style'></i>
						</a>
						
					</p>
				</div>
			</div>
		</div>
	);
}
