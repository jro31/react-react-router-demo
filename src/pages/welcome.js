import { Route } from 'react-router-dom';

const Welcome = () => {
	return (
		<section>
			<h1>The Welcome Page</h1>
			<Route path='/welcome/new-user'>
				<p>Welcome, new user!</p>
			</Route>
		</section>
	);
};

// You're not limited to defining routes in one place. You can define routes wherever you want.
// And if they are on a component which is currently active, they will be evaluated by 'react-router-dom'.
// So adding a route in the 'Welcome' page, if this page is currently active, this route will be evaluated.
// If this page is not active, the route on this page will NOT be evaluated.
// For example, '<Route path='/products'>' will never become active, because we can never be on the welcome page for a path that starts '/products'
// However, '<Route path='/welcome/new-user'>' would be active if you're on the welcome page
// So visiting 'my-domain.com/welcome' would display '<h1>The Welcome Page</h1>' but would NOT display '<p>Welcome, new user!</p>'
// However, 'my-domain.com/welcome/new-user' would display '<h1>The Welcome Page</h1>' AND '<p>Welcome, new user!</p>'

export default Welcome;
