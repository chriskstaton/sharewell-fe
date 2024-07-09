"use client";
import Link from "next/link";
import { useModalStore } from "../store/modalStore";

const BluePage = () => {
	const { openModal } = useModalStore();

	return (
		<div className="min-h-[200vh] bg-blue-500 text-white flex flex-col items-center font-sans">
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
					<button className="px-4 py-2 bg-white text-blue-500 m-[15px]">
						Back to home
					</button>
				</Link>
			</div>
		</div>
	);
};

export default BluePage;
