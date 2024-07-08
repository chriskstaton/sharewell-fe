"use client";
import Link from "next/link";
import { useModalStore } from "../store/modalStore";

const GreenPage = () => {
	const { openModal } = useModalStore();

	return (
		<div className="min-h-[200vh] bg-green-500 text-white flex flex-col items-center font-sans">
			<h1 className="text-6xl mt-8">GREEN</h1>
			<div className="mt-8 flex space-x-4">
				<button
					onClick={() => openModal(1)}
					className="px-4 py-2 bg-white text-green-500"
				>
					Open Modal 1
				</button>
				<button
					onClick={() => openModal(2)}
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

			{/* {modal1Open && <Modal {...data1} />}
			{modal2Open && <Modal {...data2} />} */}
		</div>
	);
};

export default GreenPage;
