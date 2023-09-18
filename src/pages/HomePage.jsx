import React from 'react';
import SidebarComponent from '../components/SidebarComponent';

function HomePage() {
	return (
		<div className=''>
			<div className='container mx-auto flex'>
				<SidebarComponent />
				<div className='w-[70%]'>Main Content</div>
			</div>
		</div>
	);
}

export default HomePage;
