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
			{modal3Open && (
				<Modal
					modalNumber={3}
					headerTitle="Modal 3"
					headerDescription="Lorem Ipsum is wack"
					headerDate="Wednesday, Jun 21, 2023"
					headerTime="07:00pm - 07:30pm EST"
					detailTitle="Lorem Ipsum"
					detailHost="Lorem Ipsum"
					detailDescription="Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
					buttonDescription="Lorem Ipsum is simply dummy text."
					buttonTitle="Lorem Ipsum"
				/>
			)}
		</div>
	);
};

export default BluePage;
