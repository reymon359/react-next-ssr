import Link from 'next/link';

const Index = () => (
	<div>
		<h1>Hello Next</h1>
    <Link href='/about'>
      <button>About</button>
    </Link>
		{/* <a href="./about">About</a> */}
	</div>
);

export default Index;
