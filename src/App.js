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
				<Route path='/product-detail/:productId'>
					<ProductDetail />
				</Route>
			</main>
		</div>
	);
}

// 'my-domain.com/product-detail/<any value>' will display the <ProductDetail> component
// (no matter what the <any value> is)

export default App;
