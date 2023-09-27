import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function SearchComponents() {
	return (
		<div className='flex items-center bg-primaryColor p-[10px] rounded-lg'>
			<input
				type='text'
				placeholder='Search Movie...'
				className='bg-transparent outline-none text-light placeholder:text-white placeholder:text-sm'
			/>
			<BiSearchAlt
				size={25}
				color='white'
				className='cursor-pointer'
			/>
		</div>
	);
}

export default SearchComponents;
