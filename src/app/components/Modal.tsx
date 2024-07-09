// "use client";

import React, { useEffect, useRef } from "react";
import { useModalStore } from "../store/modalStore";

import CloseButton from "./CloseButton";

import { replaceWordInProps } from "./replaceWordInProps";
import { useScreenType } from "./useScreenType";
import LogoCombined from "./LogoCombined";

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

export interface styles {
	headerClass: string;
	detailTitleContainerClass: string;
	detailTitleClass: string;
	detailHostClass: string;
	detailDescriptionClass: string;
	buttonDescriptionClass: string;
	buttonTitleClass: string;
}

const Modal: React.FC<ModalProps> = (props) => {
	const {
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
	} = props;

	const modalRef = useRef<HTMLDivElement>(null);
	const closeModal = useModalStore((state) => state.closeModal);

	const screenType = useScreenType();
	const replacedProps = replaceWordInProps(props, "cool", "wack", screenType);

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
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.body.style.overflow = "auto";
		};
	}, [closeModal, modalNumber]);

	const getModalStyles = (modalNumber: number) => {
		switch (modalNumber) {
			case 1:
				return {
					headerClass: "web:shadow-custom tablet:shadow-none",
					detailTitleContainerClass: "",
					detailTitleClass:
						"text-[14px] font-normal tablet:font-medium mobile:font-normal",
					detailHostClass: "font-bold",
					detailDescriptionClass:
						"mobile:text-[16px] font-normal tablet:font-medium",
					buttonDescriptionClass:
						"text-[14px] tablet:font-normal mobile:font-medium",
					buttonTitleClass:
						"text-[16px] font-normal tablet:font-semibold mobile:font-medium uppercase mobile:normal-case",
				};
			case 2:
				return {
					headerClass: "",
					detailTitleContainerClass: "font-medium",
					detailTitleClass: "text-[14px] font-medium",
					detailHostClass: "mobile:text-charcoalNeutral tablet:font-bold",
					detailDescriptionClass:
						"tablet:text-[16px] mobile:text-[14px] font-normal tablet:font-medium",
					buttonDescriptionClass: "text-[15px] tablet:text-[14px] font-medium",
					buttonTitleClass: "font-medium text-[16px] mobile:leading-100",
				};
			case 3:
				return {
					headerClass: "",
					detailTitleContainerClass: "",
					detailTitleClass:
						"mobile:text-purpleNeutral uppercase tablet:normal-case text-[16px] tablet:text-[14px] font-normal mobile:font-medium",
					detailHostClass:
						"mobile:text-charcoalNeutral font-semibold mobile:font-medium",
					detailDescriptionClass: "mobile:text-[16px] font-medium",
					buttonDescriptionClass: "text-[14px]",
					buttonTitleClass:
						"text-[18px] tablet:text-[16px] font-normal tablet:font-medium web:leading-[32px] tablet:leading-140 mobile:leading-100 web:tracking-webButtonSpacing tablet:tracking-[0px]",
				};
		}
	};

	const styles = getModalStyles(modalNumber);

	return (
		// dim background
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
				<div
					ref={modalRef}
					className="font-sans leading-140 relative flex flex-col items-center rounded-[12px] bg-whiteNeutral w-[640px] h-[auto] mobile:w-[339px]"
				>
					{/* top half of modal */}
					<div
						className={`flex flex-col text-left text-whiteNeutral font-medium pl-[48px] mobile:pl-[24px] relative h-[224px] mobile:h-[181px] justify-center gap-[12px] self-stretch bg-purpleNeutral rounded-t-[12px] ${styles?.headerClass}`}
					>
						<h2 className="text-[32px] mobile:text-[18px] mobile:pt-[24px] leading-140">
							{/* include leading-140 here to override default h2 style */}
							{modalNumber === 3 ? replacedProps.headerTitle : headerTitle}
						</h2>
						<div className="text-[14px]">
							{modalNumber === 3
								? replacedProps.headerDescription
								: headerDescription}
						</div>

						<div className="flex flex-col text-[16px] mobile:text-[14px]">
							<div>{headerDate}</div>
							<div>{headerTime}</div>
						</div>
						<div className="absolute right-0 bottom-0">
							<LogoCombined />
						</div>
					</div>
					{/* bottom half of modal */}
					<div className="flex text-left justify-between items-start px-[24px] pt-[24px] pb-[0px] self-stretch">
						<div
							className={`flex flex-col gap-[4px] ${styles?.detailTitleContainerClass}`}
						>
							<div
								className={`text-charcoalNeutral ${styles?.detailTitleClass}`}
							>
								{modalNumber === 3 ? replacedProps.detailTitle : detailTitle}
							</div>
							<div
								className={`text-purpleNeutral text-[16px] ${styles?.detailHostClass}`}
							>
								{modalNumber === 3 ? replacedProps.detailHost : detailHost}
							</div>
						</div>
						<CloseButton onClick={() => closeModal(modalNumber)} />
					</div>
					<div className="flex flex-col pt-[16px] pb-[24px] pl-[24px] pr-[24px] justify-center items-start gap-[16px] self-stretch">
						<div
							className={`overflow-y-auto max-h-[15vh] text-left text-blackNeutral text-[14px] font-medium ${styles?.detailDescriptionClass}`}
						>
							{modalNumber === 3
								? replacedProps.detailDescription
								: detailDescription}
						</div>
					</div>
					<div className="flex flex-col justify-center items-center gap-[10px] self-stretch px-[24px] py-[24px] border-t border-greyAshNeutral">
						<div
							className={`text-center text-charcoalNeutral text-[14px] font-medium ${styles?.buttonDescriptionClass}`}
						>
							{modalNumber === 3
								? replacedProps.buttonDescription
								: buttonDescription}
						</div>
						<button
							className={`px-[32px] py-[12px] mobile:px-[72px] mobile:py-[16px] w-full rounded-[12px] bg-buttonBackground text-buttonDisabled mobile:tracking-mobileButtonSpacing mobile:font-mobileButton mobile:leading-100 ${styles?.buttonTitleClass}`}
						>
							{modalNumber === 3 ? replacedProps.buttonTitle : buttonTitle}
						</button>
					</div>
				</div>
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-[24px] text-whiteNeutral">
					{screenType}
				</div>
			</div>
		</div>
	);
};

export default Modal;
