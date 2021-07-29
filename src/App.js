import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import NewBlog from './components/NewBlog';
import BlogPage from './components/BlogPage';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route path="/create">
					<NewBlog />
				</Route>

				<Route path="/posts/:id">
					<BlogPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
