import { Route, Switch } from 'react-router-dom';

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

// The <Switch> component can be wrapped around the <Route> components, at which point only one <Route> can be active at the same time
// The 'active' <Route> will be the one that is matched first
// So one solution, to make sure that the <ProductDetail /> component is displayed and the <Products /> component isn't, is to change the order they written in this file, so that <ProductDetail /> is first
// However, the solution used here is to add the 'exact' prop to '<Route path='/products' exact>'.
// In this case, the URL is only considered a 'match' to the path, if it is an exact match, rather than just matching the beginning of the path
// So 'my-domain.com/products' will display the <Products /> component
// And 'my-domain.com/products/p1' will display just the <ProductDetail /> component

export default App;
