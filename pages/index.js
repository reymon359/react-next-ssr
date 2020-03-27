import Link from 'next/link';

const Index = () => (
	<div>
		<h1>Hello Next</h1>
    <Link href='/about'>
      <button>About</button>
    </Link>
    <Link href='/robots'>
      <button>Robots</button>
    </Link>
		{/* <a href="./about">About</a> */}
	</div>
);

export default Index;
