import { useCookie } from "nuxt/app";
let themeCookie = useCookie("theme-cookie");

if (themeCookie.value == undefined) {
	themeCookie.value = "dark";
}
useColorMode().value = themeCookie.value;

export const toggleTheme = () => {
	if (themeCookie.value == "dark") {
		themeCookie.value = "light";
		useColorMode().value = themeCookie.value;
	} else {
		themeCookie.value = "dark";
		useColorMode().value = themeCookie.value;
	}
};
