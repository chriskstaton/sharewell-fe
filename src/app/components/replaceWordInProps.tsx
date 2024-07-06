import { ModalProps } from "./Modal"; // Update the import path as necessary

const replaceWordInText = (
	text: string,
	oldWord: string,
	newWord: string
): string => {
	return text
		.split(" ")
		.map((word) => (word === oldWord ? newWord : word))
		.join(" ");
};

export const replaceWordInProps = (
	props: ModalProps,
	oldWord: string,
	newWord: string,
	screenType: "mobile" | "tablet" | "web"
): ModalProps => {
	if (screenType !== "web") {
		return props;
	}

	return {
		...props,
		headerTitle: replaceWordInText(props.headerTitle, oldWord, newWord),
		headerDescription: replaceWordInText(
			props.headerDescription,
			oldWord,
			newWord
		),
		detailTitle: replaceWordInText(props.detailTitle, oldWord, newWord),
		detailDescription: replaceWordInText(
			props.detailDescription,
			oldWord,
			newWord
		),
	};
};
