import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	display: "swap",
	subsets: ["latin"],
});

export const roboto = Roboto({
	weight: "500",
	display: "swap",
	subsets: ["latin"],
});
