import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
	return <Image src="/logo.svg" alt="Logo" width={248} height={224} />;
};

export default Logo;
