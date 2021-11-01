import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/welcome'; // It's not necesary (they could still be in the 'components' folder), but a good convention is to store these "route" components in a separate 'pages' folder
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/welcome' />
					</Route>
					<Route path='/welcome'>
						<Welcome />
					</Route>
					<Route path='/products' exact>
						<Products />
					</Route>
					<Route path='/products/:productId'>
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

// The 'exact' prop is important in '<Route path='/' exact>', because all routes start with '/', so it would 'match' all routes

export default App;
