import { Link } from 'react-router-dom';

const MainHeader = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/welcome'>Welcome</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

// We use '<Link to='/welcome'>Welcome</Link>' instead of '<a href='/welcome'>Welcome</a>' because using the anchor tag will reload the page
// The 'Link' component will prevent the default browser behaviour, manually update the URL for us, and change what we see on the screen
// However, unlike '<a>' it does NOT send another http request and reload the page

export default MainHeader;
