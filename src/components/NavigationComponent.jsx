import React from 'react';
import SearchComponents from './SearchComponents';
import ProfileComponent from './ProfileComponent';

function NavigationComponent() {
	return (
		<div className='w-full h-[100px] flex bg-darkColor'>
			<div className='container mx-auto flex items-center justify-between'>
				<h1 className='text-gray-200 text-2xl'>Morilaa</h1>

				<SearchComponents />

				<ProfileComponent />
			</div>
		</div>
	);
}

export default NavigationComponent;
