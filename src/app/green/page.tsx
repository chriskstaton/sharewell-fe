"use client";
import Modal from "../components/Modal";
import Link from "next/link";
import { useModalStore } from "../store/modalStore";

const GreenPage = () => {
	const { modal1Open, modal2Open, openModal } = useModalStore();

	return (
		<div className="min-h-screen bg-green-500 text-white flex flex-col items-center font-sans">
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

			{modal1Open && (
				<Modal
					modalNumber={1}
					headerTitle="Modal 1"
					headerDescription="Lorem Ipsum is simply"
					headerDate="Thursday, Jun 22, 2024"
					headerTime="06:00pm - 07:30pm EST"
					detailTitle="Lorem Ipsum"
					detailHost="Lorem Ipsum"
					detailDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
					buttonDescription="Lorem Ipsum is simply dummy text."
					buttonTitle="Lorem Ipsum"
				/>
			)}
			{modal2Open && (
				<Modal
					modalNumber={2}
					headerTitle="Modal 2"
					headerDescription="Lorem Ipsum is fun"
					headerDate="Friday, Jun 04, 2023"
					headerTime="09:00pm - 09:30pm PST"
					detailTitle="Lorem Ipsum"
					detailHost="Lorem Ipsum"
					detailDescription="Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur."
					buttonDescription="Lorem Ipsum is simply dummy text."
					buttonTitle="Lorem Ipsum"
				/>
			)}
		</div>
	);
};

export default GreenPage;
