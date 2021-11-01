import { Route } from 'react-router-dom';

import Welcome from './pages/welcome'; // It's not necesary (they could still be in the 'components' folder), but a good convention is to store these "route" components in a separate 'pages' folder
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Route path='/welcome'>
					<Welcome />
				</Route>
				<Route path='/products'>
					<Products />
				</Route>
				<Route path='/products/:productId'>
					<ProductDetail />
				</Route>
			</main>
		</div>
	);
}

// In this example, 'my-domain.com/products/p1' "matches" the path for the <Products /> component and the <ProductDetail /> component
// Because in the 'react-router' world, 'matches' means that the path starts with the path defined in the <Route> component
// So 'my-domain.com/products/p1' will display both <Products />, and then <ProductDetail /> below it
// In some instances you may want this, and this is a good way to achieve it

export default App;
