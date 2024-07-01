"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Modal from "../components/Modal";
import Link from "next/link";

const BluePage = () => {
	const [modal2Open, setModal2Open] = useState(false);
	const [modal3Open, setModal3Open] = useState(false);

	return (
		<div className="min-h-screen bg-blue-500 text-white flex flex-col items-center">
			<h1 className="text-6xl mt-8">BLUE</h1>
			<div className="mt-8 flex space-x-4">
				<button
					onClick={() => setModal2Open(true)}
					className="px-4 py-2 bg-white text-blue-500"
				>
					Open Modal 2
				</button>
				<button
					onClick={() => setModal3Open(true)}
					className="px-4 py-2 bg-white text-blue-500"
				>
					Open Modal 3
				</button>
			</div>
			<div>
				<Link href={"/"}>
					<button
						style={{ margin: "15px" }}
						className="px-4 py-2 bg-white text-blue-500"
					>
						Back to home
					</button>
				</Link>
			</div>

			{modal2Open && (
				<Modal title="Modal 2" onClose={() => setModal2Open(false)}>
					{<p>This is the content of Modal 1.</p>}
				</Modal>
			)}
			{modal3Open && (
				<Modal title="Modal 3" onClose={() => setModal3Open(false)}>
					{<p>This is the content of Modal 2.</p>}
				</Modal>
			)}
		</div>
	);
};

export default BluePage;
