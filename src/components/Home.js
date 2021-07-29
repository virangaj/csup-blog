import Card from './Card';
import useFetch from './useFetch';

function Home() {
	const { data: posts } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	console.log(posts);

	return (
		<div className="posts-list">
			<div className="posts-container">
				{posts ? (
					posts.map((post) => <Card data={post} key={post.id} />)
				) : (
					<p>Loading..</p>
				)}
			</div>
		</div>
	);
}

export default Home;
