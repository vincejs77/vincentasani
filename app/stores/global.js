import { defineStore } from "pinia";

export const useGlobalStore = defineStore("v-global-store", {
	state: () => ({
		isLoadingPage: true
	})
});
