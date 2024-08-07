"use client";

import Modal from "./components/Modal";
import { useModalStore } from "./store/modalStore";
import { data1, data2, data3 } from "./modalData";

import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { modal1Open, modal2Open, modal3Open } = useModalStore();

	return (
		<html lang="en">
			{/* <html lang="en" className={poppins.className}> https://nextjs.org/docs/app/building-your-application/optimizing/fonts */}
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
					rel="stylesheet"
				/>
				{/* //TODO */}
			</head>
			<body>
				<div>{children}</div>

				{modal1Open && <Modal {...data1} />}
				{modal2Open && <Modal {...data2} />}
				{modal3Open && <Modal {...data3} />}
			</body>
		</html>
	);
}
