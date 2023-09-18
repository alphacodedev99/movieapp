import { Outlet } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent';
import axios from 'axios';

axios.interceptors.request.use((config) => {
	config.headers.Authorization =
		'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjVkZGM0NDFlZGVmZDk4ZmQwNDc3M2I4MzY4MzdmMSIsInN1YiI6IjYyYTBkZWUwZDIxNDdjMTE3ZTY4MDk2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q6r9vU8lxqA-t-9w4MIodJdDHPoA3TMOaYmAkp5KuWU';

	return config;
});

function App() {
	return (
		<div>
			<NavigationComponent />
			<Outlet />
		</div>
	);
}

export default App;
