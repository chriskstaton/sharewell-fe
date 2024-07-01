import React, { ReactNode } from "react";

interface ModalProps {
	title: string;
	children: ReactNode;
	content?: string;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, children, onClose }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-sans">
			<div className="relative bg-white p-4 rounded-md w-11/12 max-w-lg">
				<h2 className="text-2xl mb-4">{title}</h2>
				<button onClick={onClose} className="absolute top-4 right-4 text-black">
					&times;
				</button>
				{children}
				<div>{content}</div>
			</div>
		</div>
	);
};

export default Modal;
