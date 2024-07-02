import React from "react";

interface CloseButtonProps {
	onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
	return (
		<button onClick={onClick} className="text-black">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-[24px] h-[24px]"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z"
					fill="#292B2E"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.7803 6.21967C18.0732 6.51256 18.0732 6.98744 17.7803 7.28033L7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803C5.92678 17.4874 5.92678 17.0126 6.21967 16.7197L16.7197 6.21967C17.0126 5.92678 17.4874 5.92678 17.7803 6.21967Z"
					fill="#292B2E"
				/>
			</svg>
		</button>
	);
};

export default CloseButton;
