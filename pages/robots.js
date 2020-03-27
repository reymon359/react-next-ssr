import React from 'react';
import Link from 'next/Link';
import fetch from 'isomorphic-unfetch';

const Robots = props => {
	console.log(props);

	return (
		<div>
			<h1>Robots</h1>
			<Link href="/">
				<button>Home</button>
			</Link>
			<div>
				{props.robots.map(robot => (
					<li key={robot.id}>
						<Link href={`robots/${robot.id}`}>
							<a>{robot.name}</a>
						</Link>
					</li>
				))}
			</div>
		</div>
	);
};

Robots.getInitialProps = async () => {
	console.log('getinitialprops');

	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log(data);

	return {
		robots: data
	};
};

export default Robots;
