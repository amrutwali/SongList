import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// components
import Home from './Components/Home';
import Songs from './Components/Songs';
import Artists from './Components/Artists';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';
// styles
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<header>
				<nav className="max-width">
					<Link
						className="site-header"
						to="/"
					>
						Song<span>ify</span>
					</Link>
					<ul>
						<li>
							<Link to="/songs">Songs</Link>
						</li>
						<li>
							<Link to="/artists">Artists</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/songs:id"
					element={<Songs />}
				/>
				<Route
					path="/songs"
					element={<Songs />}
				/>
				<Route
					path="/artists"
					element={<Artists />}
				/>
				<Route
					path="/artists:id"
					element={<Artists />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/*"
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
