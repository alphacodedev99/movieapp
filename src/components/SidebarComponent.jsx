import React, { useEffect, useState } from 'react';
import MovieService from '../store/MovieService';

import genresIcon from '../assets/genres/index';

function SidebarComponent() {
	const [allGenres, setAllGenres] = useState([]);

	useEffect(() => {
		MovieService.getGenre()
			.then((res) => setAllGenres(res.data.genres))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='w-[30%] h-[100vh] bg-slate-600 '>
			{allGenres.map((genre) => {
				return (
					<div key={genre.id} className='flex items-center gap-2'>
						<img
							src={genresIcon[genre.name.toLowerCase()]}
							alt='img'
							className='w-[30px]'
						/>
						<h2>{genre.name}</h2>
					</div>
				);
			})}
		</div>
	);
}

export default SidebarComponent;
