"use client";
import Modal from "../components/Modal";
import Link from "next/link";
import { useModalStore } from "../store/modalStore";

const BluePage = () => {
	const { modal2Open, modal3Open, openModal } = useModalStore();

	return (
		<div className="min-h-screen bg-blue-500 text-white flex flex-col items-center font-sans">
			<h1 className="text-6xl mt-8">BLUE</h1>
			<div className="mt-8 flex space-x-4">
				<button
					onClick={() => openModal(2)}
					className="px-4 py-2 bg-white text-blue-500"
				>
					Open Modal 2
				</button>
				<button
					onClick={() => openModal(3)}
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
				<Modal
					title="Modal 2"
					modalNumber={2}
					content={<p>This is the content of Modal 2</p>}
				></Modal>
			)}
			{modal3Open && (
				<Modal
					title="Modal 3"
					modalNumber={3}
					content={<p>This is the content of Modal 3</p>}
				></Modal>
			)}
		</div>
	);
};

export default BluePage;
