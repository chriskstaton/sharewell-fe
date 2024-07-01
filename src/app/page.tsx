import Link from "next/link";

const HomePage = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<h1 className="text-4xl font-sans">Home</h1>
			<nav className="mt-8">
				<ul className="flex space-x-4 font-sans">
					<li>
						<Link id="green" href="green">
							Green Page
						</Link>
					</li>
					<li>
						<Link id="blue" href="blue">
							Blue Page
						</Link>
					</li>
					<li>
						<Link id="red" href="red">
							Red Page
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default HomePage;
