import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
	id: "v-global-store",
	state: () => {
		return {
			isLoadingPage: true
		};
	}
});
