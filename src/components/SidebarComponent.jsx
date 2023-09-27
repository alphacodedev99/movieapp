import React, { useEffect, useState } from 'react';
import MovieService from '../services/MovieService';

import genresIcon from '../assets/genres/index';

function SidebarComponent() {
	const [allGenres, setAllGenres] = useState([]);

	useEffect(() => {
		MovieService.getGenre()
			.then((res) => setAllGenres(res.data.genres))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='w-[30%] h-[100vh] bg-primaryPurple flex flex-col gap-2 '>
			{allGenres.map((genre) => {
				return (
					<div
						key={genre.id}
						className='flex items-center gap-2 cursor-pointer bg-lightGreen p-1 rounded-lg'>
						<img
							src={genresIcon[genre.name.toLowerCase()]}
							alt='img'
							className='w-[30px]'
						/>
						<h2 className='text-gray-200 hover:text-white'>
							{genre.name}
						</h2>
					</div>
				);
			})}
		</div>
	);
}

export default SidebarComponent;
