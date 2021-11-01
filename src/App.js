import { Route } from 'react-router-dom';

import Welcome from './pages/welcome'; // It's not necesary (they could still be in the 'components' folder), but a good convention is to store these "route" components in a separate 'pages' folder
import Products from './pages/Products';

function App() {
	return (
		<div>
			<Route path='/welcome'>
				<Welcome />
			</Route>
			<Route path='/products'>
				<Products />
			</Route>
		</div>
	);
}

// The <Welcome /> componeont will be displayed when the url is 'my-domain.com/welcome'
// The <Products /> component will be displayed when the url is 'my-domain.com/products'
// 'my-domain.com' or 'my-domain.com/anything-else' will display nothing

export default App;
