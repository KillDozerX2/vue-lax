import lax from "lax.js";

export default {
	name: "VueLax",
	install: (Vue) => {
		// Add lax as a vue prototype property
		Vue.prototype.$lax = lax;

		// Setup the update function
		const updateLax = () => {
			Vue.prototype.$lax.update(window.scrollY);
			window.requestAnimationFrame(updateLax);
		};

		// Call setup() on the lax object
		Vue.prototype.$lax.setup();

		// Start the Recursive update function
		window.requestAnimationFrame(updateLax);
		Vue.mixin({
			mounted() {
				console.log(this.$el.querySelectorAll);
			},
			beforeDestroy() {
			}
		});
	}
};