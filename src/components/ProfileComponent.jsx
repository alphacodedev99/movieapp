import React from 'react';
import Profile from '../assets/profile.png';

function ProfileComponent() {
	return (
		<div>
			<img
				src={Profile}
				alt='Profile image'
				className='w-[50px] h-[50px] object-cover rounded-full cursor-pointer'
			/>
		</div>
	);
}

export default ProfileComponent;
