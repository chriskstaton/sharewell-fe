"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Modal from "../components/Modal";
import Link from "next/link";

const GreenPage = () => {
	const [modal1Open, setModal1Open] = useState(false);
	const [modal2Open, setModal2Open] = useState(false);

	return (
		<div className="min-h-screen bg-green-500 text-white flex flex-col items-center font-sans">
			<h1 className="text-6xl mt-8">GREEN</h1>
			<div className="mt-8 flex space-x-4">
				<button
					onClick={() => setModal1Open(true)}
					className="px-4 py-2 bg-white text-green-500"
				>
					Open Modal 1
				</button>
				<button
					onClick={() => setModal2Open(true)}
					className="px-4 py-2 bg-white text-green-500"
				>
					Open Modal 2
				</button>
			</div>
			<div>
				<Link href={"/"}>
					<button
						style={{ margin: "15px" }}
						className="px-4 py-2 bg-white text-green-500"
					>
						Back to home
					</button>
				</Link>
			</div>

			{modal1Open && (
				<Modal title="Modal 1" onClose={() => setModal1Open(false)}>
					{<p>This is the content of Modal 1.</p>}
				</Modal>
			)}
			{modal2Open && (
				<Modal title="Modal 2" onClose={() => setModal2Open(false)}>
					{<p>This is the content of Modal 2.</p>}
				</Modal>
			)}
		</div>
	);
};

export default GreenPage;
