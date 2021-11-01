import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={classes.active} to='/welcome'>
							Welcome
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to='/products'>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

// 'NavLink' does the same as 'Link', but it also sets a css class, on the active anchor item, with the 'activeClassName' prop

export default MainHeader;
