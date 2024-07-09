import React from "react";
import Image from "next/image";
import { useScreenType } from "./useScreenType";

const Logo: React.FC = () => {
	const screenType = useScreenType();
	return (
		<>
			{screenType === "mobile" ? (
				<Image src="/logo-mobile.svg" alt="Logo" width={136} height={145} />
			) : (
				<Image src="/logo.svg" alt="Logo" width={248} height={224} />
			)}
		</>
	);
};

export default Logo;
