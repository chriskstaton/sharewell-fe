import { useEffect, useState } from "react";

export const useScreenType = (): "mobile" | "tablet" | "web" => {
	const [screenType, setScreenType] = useState<"mobile" | "tablet" | "web">(
		"web"
	);

	useEffect(() => {
		const mobileQuery = window.matchMedia("(max-width: 639px)");
		const tabletQuery = window.matchMedia(
			"(min-width: 640px) and (max-width: 1023px)"
		);

		const handleResize = () => {
			if (mobileQuery.matches) {
				setScreenType("mobile");
			} else if (tabletQuery.matches) {
				setScreenType("tablet");
			} else {
				setScreenType("web");
			}
		};

		handleResize();

		mobileQuery.addEventListener("change", handleResize);
		tabletQuery.addEventListener("change", handleResize);

		return () => {
			mobileQuery.removeEventListener("change", handleResize);
			tabletQuery.removeEventListener("change", handleResize);
		};
	}, []);

	return screenType;
};
