import React from 'react';
import SidebarComponent from '../components/SidebarComponent';

function HomePage() {
	return (
		<div className='bg-primaryColor'>
			<div className='container mx-auto flex gap-10 pt-[50px]'>
				<SidebarComponent />
				<div className='w-[70%]'>Main Content</div>
			</div>
		</div>
	);
}

export default HomePage;
