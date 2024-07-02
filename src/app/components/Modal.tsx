import React, { ReactNode, useEffect, useRef } from "react";
import { useModalStore } from "../store/modalStore";
import CloseButton from "./CloseButton";
import Logo from "./Logo";

interface ModalProps {
	title: string;
	children?: ReactNode;
	content?: ReactNode;
	modalNumber: number;
	onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
	title,
	content,
	modalNumber,
	children,
	onClose,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const closeModal = useModalStore((state) => state.closeModal);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				closeModal(modalNumber);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [closeModal, modalNumber]);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div
				ref={modalRef}
				className="relative flex w-[640px] flex-col items-center rounded-[12px] bg-white"
			>
				<div className="flex flex-col h-[224px] justify-center gap-[12px] self-stretch bg-purpleCustom shadow-custom rounded-t-[12px] relative">
					<h2 className="text-left text-white text-[32px] font-poppins font-medium leading-[44.8px] pl-[48px]">
						{title}
					</h2>
					<div className="text-white text-[14px] font-poppins font-medium leading-[19.6px] pl-[48px]">
						Div 1
					</div>
					<div className="text-white text-[16px] font-poppins font-medium leading-[22.4px] pl-[48px]">
						Div 2
					</div>
					<div className="absolute right-[0px] bottom-0">
						<Logo />
					</div>
				</div>
				<div className="flex px-6 pt-6 items-center gap-2.5 self-stretch ml-auto">
					<CloseButton onClick={() => closeModal(modalNumber)} />
				</div>
				<div className="p-4 w-full text-left">{content}</div>
			</div>
		</div>
	);
};

export default Modal;
