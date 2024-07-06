import { create } from "zustand";

interface ModalStore {
	modal1Open: boolean;
	modal2Open: boolean;
	modal3Open: boolean;
	openModal: (modalNumber: number) => void;
	closeModal: (modalNumber: number) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
	modal1Open: false,
	modal2Open: false,
	modal3Open: false,
	openModal: (modalNumber) =>
		set((state) => {
			switch (modalNumber) {
				case 1:
					return { modal1Open: true };
				case 2:
					return { modal2Open: true };
				case 3:
					return { modal3Open: true };
				default:
					return state;
			}
		}),
	closeModal: (modalNumber) =>
		set((state) => {
			switch (modalNumber) {
				case 1:
					return { modal1Open: false };
				case 2:
					return { modal2Open: false };
				case 3:
					return { modal3Open: false };
				default:
					return state;
			}
		}),
}));
