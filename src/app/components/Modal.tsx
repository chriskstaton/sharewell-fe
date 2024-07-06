import React, { ReactNode, useEffect, useRef } from "react";
import { useModalStore } from "../store/modalStore";
import CloseButton from "./CloseButton";
import Logo from "./Logo";

export interface ModalProps {
	headerTitle: string;
	headerDescription: string;
	headerDate: string;
	headerTime: string;
	detailTitle: string;
	detailHost: string;
	detailDescription: string;
	buttonDescription: string;
	buttonTitle: string;
	modalNumber: number;
}

const Modal: React.FC<ModalProps> = ({
	headerTitle,
	headerDescription,
	headerDate,
	headerTime,
	detailTitle,
	detailHost,
	detailDescription,
	buttonDescription,
	buttonTitle,
	modalNumber,
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

	const renderModalContent = () => {
		switch (modalNumber) {
			case 1:
				return (
					<div
						ref={modalRef}
						className="relative flex flex-col items-center rounded-[12px] bg-whiteNeutral web:w-[640px] web:h-[auto] tablet:w-[640px] tablet:h-[auto] mobile:w-[339px] mobile:h-[auto]"
					>
						{/* top half of modal */}
						<div className="flex flex-col web:h-[224px] tablet:h-[224px] mobile:h-[181px] justify-center gap-[12px] self-stretch bg-purpleNeutral web:shadow-custom tablet:shadow-none mobile:shadow-none rounded-t-[12px] relative">
							<h2 className="text-left text-whiteNeutral web:text-[32px] tablet:text-[32px] mobile:text-[18px] font-poppins font-medium web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px] leading-140">
								{headerTitle}
							</h2>
							<div className="text-whiteNeutral text-[14px] font-poppins font-medium web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px] leading-140">
								{headerDescription}
							</div>
							<div className="flex flex-col web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px]">
								<div className="text-whiteNeutral web:text-[16px] tablet:text-[16px] mobile:text-[14px] font-poppins font-medium leading-140">
									{headerDate}
								</div>
								<div className="text-whiteNeutral web:text-[16px] tablet:text-[16px] mobile:text-[14px] font-poppins font-medium leading-140">
									{headerTime}
								</div>
							</div>
							<div className="absolute right-0 bottom-0 mobile:absolute mobile:right-[-20px] mobile:bottom-[-36px] mobile:w-[204px] mobile:h-[204px] mobile:p-[20px]">
								<Logo />
							</div>
						</div>
						{/* bottom half of modal */}
						<div className="flex justify-between items-start px-[24px] pt-[24px] pb-[0px] self-stretch">
							<div className="flex flex-col gap-[4px]">
								<div className="text-left text-charcoalNeutral font-poppins text-[14px] web:font-normal tablet:font-medium mobile:font-normal leading-140">
									{detailTitle}
								</div>
								<div className="text-left text-purpleNeutral font-poppins text-[16px] font-bold leading-140">
									{detailHost}
								</div>
							</div>
							<CloseButton onClick={() => closeModal(modalNumber)} />
						</div>
						<div className="flex flex-col pt-[16px] pb-[24px] pl-[24px] pr-[24px] justify-center items-start gap-[16px] self-stretch">
							<div className="text-left text-blackNeutral font-poppins web:text-[14px] tablet:text-[14px] mobile:text-[16px] web:font-normal tablet:font-medium mobile:font-medium leading-140">
								{detailDescription}
							</div>
						</div>
						<div className="flex flex-col justify-center items-center gap-[10px] self-stretch px-[24px] py-[24px] border-t border-greyAshNeutral">
							<div className="text-center text-charcoalNeutral font-poppins text-[14px] web:font-medium tablet:font-normal mobile:font-medium leading-140">
								{buttonDescription}
							</div>
							<button className="flex justify-center items-center gap-[8px] web:px-[32px] web:py-[12px] tablet:px-[32px] tablet:py-[12px] mobile:px-[72px] mobile:py-[16px] w-full rounded-[12px] bg-buttonBackground text-buttonDisabled text-[16px] web:font-normal tablet:font-semibold mobile:font-medium web:uppercase tablet:uppercase mobile:normal-case web:leading-140 tablet:leading-140 mobile:leading-100 mobile:tracking-mobileButtonSpacing mobile:font-mobileButton">
								{buttonTitle}
							</button>
						</div>
					</div>
				);
			case 2:
				return (
					<div
						ref={modalRef}
						className="relative flex flex-col items-center rounded-[12px] bg-whiteNeutral web:w-[640px] web:h-[auto] tablet:w-[640px] tablet:h-[auto] mobile:w-[339px] mobile:h-[auto]"
					>
						{/* top half of modal */}
						<div className="flex flex-col web:h-[224px] tablet:h-[224px] mobile:h-[181px] justify-center gap-[12px] self-stretch bg-purpleNeutral rounded-t-[12px] relative">
							<h2 className="text-left text-whiteNeutral web:text-[32px] tablet:text-[32px] mobile:text-[18px] font-poppins font-medium web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px] leading-140">
								{headerTitle}
							</h2>
							<div className="text-whiteNeutral text-[14px] font-poppins font-medium web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px] leading-140">
								{headerDescription}
							</div>
							<div className="flex flex-col web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px]">
								<div className="text-whiteNeutral web:text-[16px] tablet:text-[16px] mobile:text-[14px] font-poppins font-medium leading-140">
									{headerDate}
								</div>
								<div className="text-whiteNeutral web:text-[16px] tablet:text-[16px] mobile:text-[14px] font-poppins font-medium leading-140">
									{headerTime}
								</div>
							</div>
							<div className="absolute right-0 bottom-0 mobile:absolute mobile:right-[-20px] mobile:bottom-[-36px] mobile:w-[204px] mobile:h-[204px] mobile:p-[20px]">
								<Logo />
							</div>
						</div>
						{/* bottom half of modal */}
						<div className="flex justify-between items-start px-[24px] pt-[24px] pb-[0px] self-stretch">
							<div className="flex flex-col gap-[4px]">
								<div className="text-left text-charcoalNeutral font-poppins text-[14px] web:font-medium tablet:font-medium mobile:font-medium leading-140">
									{detailTitle}
								</div>
								<div className="text-left web:text-purpleNeutral tablet:text-purpleNeutral mobile:text-charcoalNeutral font-poppins text-[16px] web:font-medium tablet:font-bold mobile:font-bold leading-140 ">
									{detailHost}
								</div>
							</div>
							<CloseButton onClick={() => closeModal(modalNumber)} />
						</div>
						<div className="flex flex-col pt-[16px] pb-[24px] pl-[24px] pr-[24px] justify-center items-start gap-[16px] self-stretch">
							<div className="text-left text-blackNeutral font-poppins web:text-[14px] tablet:text-[16px] mobile:text-[14px] web:font-normal tablet:font-medium mobile:font-medium leading-140">
								{detailDescription}
							</div>
						</div>
						<div className="flex flex-col justify-center items-center gap-[10px] self-stretch px-[24px] py-[24px] border-t border-greyAshNeutral">
							<div className="text-center text-charcoalNeutral font-poppins web:text-[15px] tablet:text-[14px] mobile:text-[14px] font-medium leading-140">
								{buttonDescription}
							</div>
							<button className="flex justify-center items-center gap-[8px] web:px-[32px] web:py-[12px] tablet:px-[32px] tablet:py-[12px] mobile:px-[72px] mobile:py-[16px] w-full rounded-[12px] bg-buttonBackground text-buttonDisabled text-[16px] font-medium web:leading-140 tablet:leading-140 mobile:leading-100 mobile:tracking-mobileButtonSpacing mobile:font-mobileButton">
								{buttonTitle}
							</button>
						</div>
					</div>
				);

			case 3:
				return (
					<div
						ref={modalRef}
						className="relative flex flex-col items-center rounded-[12px] bg-whiteNeutral web:w-[640px] web:h-[auto] tablet:w-[640px] tablet:h-[auto] mobile:w-[339px] mobile:h-[auto]"
					>
						{/* top half of modal */}
						<div className="flex flex-col web:h-[224px] tablet:h-[224px] mobile:h-[181px] justify-center gap-[12px] self-stretch bg-purpleNeutral rounded-t-[12px] relative">
							<h2 className="text-left text-whiteNeutral web:text-[32px] tablet:text-[32px] mobile:text-[18px] font-poppins font-medium web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px] leading-140">
								{headerTitle}
							</h2>
							<div className="text-whiteNeutral text-[14px] font-poppins font-medium web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px] leading-140">
								{headerDescription}
							</div>
							<div className="flex flex-col web:pl-[48px] tablet:pl-[48px] mobile:pl-[24px]">
								<div className="text-whiteNeutral web:text-[16px] tablet:text-[16px] mobile:text-[14px] font-poppins font-medium leading-140">
									{headerDate}
								</div>
								<div className="text-whiteNeutral web:text-[16px] tablet:text-[16px] mobile:text-[14px] font-poppins font-medium leading-140">
									{headerTime}
								</div>
							</div>
							<div className="absolute right-0 bottom-0 mobile:absolute mobile:right-[-20px] mobile:bottom-[-36px] mobile:w-[204px] mobile:h-[204px] mobile:p-[20px]">
								<Logo />
							</div>
						</div>
						{/* bottom half of modal */}
						<div className="flex justify-between items-start px-[24px] pt-[24px] pb-[0px] self-stretch">
							<div className="flex flex-col gap-[4px]">
								<div className="text-left web:text-charcoalNeutral tablet:text-charcoalNeutral mobile:text-purpleNeutral font-poppins web:uppercase tablet:normal-case mobile:normal-case web:text-[16px] tablet:text-[14px] mobile:text-[14px] web:font-normal tablet:font-normal mobile:font-medium leading-140">
									{detailTitle}
								</div>
								<div className="text-left web:text-purpleNeutral tablet:text-purpleNeutral mobile:text-charcoalNeutral font-poppins text-[16px] web:font-bold tablet:font-bold mobile:font-medium leading-140">
									{detailHost}
								</div>
							</div>
							<CloseButton onClick={() => closeModal(modalNumber)} />
						</div>
						<div className="flex flex-col pt-[16px] pb-[24px] pl-[24px] pr-[24px] justify-center items-start gap-[16px] self-stretch">
							<div className="text-left text-blackNeutral font-poppins web:text-[14px] tablet:text-[14px] mobile:text-[16px] font-medium leading-140">
								{detailDescription}
							</div>
						</div>
						<div className="flex flex-col justify-center items-center gap-[10px] self-stretch px-[24px] py-[24px] border-t border-greyAshNeutral">
							<div className="text-center text-charcoalNeutral font-poppins text-[14px] font-medium leading-140">
								{buttonDescription}
							</div>
							<button className="flex justify-center items-centergap-[8px] web:px-[32px] web:py-[12px] tablet:px-[32px] tablet:py-[12px] mobile:px-[72px] mobile:py-[16px] w-full rounded-[12px] bg-buttonBackground text-buttonDisabled web:text-[18px] web:font-normal tablet:font-medium mobile:font-medium web:leading-[32px] tablet:leading-140 mobile:leading-100 web:tracking-webButtonSpacing mobile:tracking-mobileButtonSpacing mobile:font-mobileButton">
								{buttonTitle}
							</button>
						</div>
					</div>
				);
		}
	};

	return (
		// dim background
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			{renderModalContent()}
		</div>
	);
};

export default Modal;
