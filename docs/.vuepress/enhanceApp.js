/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import { VueLax } from "../../src/main.js";
export default ({
	Vue,
}) => {
	Vue.use(VueLax);
}
