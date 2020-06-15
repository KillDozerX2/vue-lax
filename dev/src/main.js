import Vue from "vue";
import App from "./App.vue";
import VueLax from "../../dist/vue-lax";

Vue.use(VueLax);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
