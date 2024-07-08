import React from "react";
import Image from "next/image";
import { useScreenType } from "./useScreenType";

const Logo: React.FC = () => {
	const screenType = useScreenType();
	return (
		<>
			{screenType === "mobile" ? (
				<Image src="/logo-mobile.svg" alt="Logo" width={150} height={140} />
			) : (
				<Image src="/logo.svg" alt="Logo" width={248} height={224} />
			)}
		</>
	);
};

export default Logo;
