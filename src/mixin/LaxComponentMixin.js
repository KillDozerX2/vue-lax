export default {
	mounted() {
		// The nextTick callback waits for vue to render child components
		this.$nextTick(() => {
			// Add the component element to lax
			this.$lax.addElement(this.$el);

			// Select all the nodes inside the component which have to be animated, loop through them and add them to lax.
			this.$el.querySelectorAll(this.$lax.selector).forEach(newLaxEl => {
				this.$lax.addElement(newLaxEl);
			});
		});
	},
	beforeDestroy() {
		// Remove the component element from lax
		this.$lax.removeElement(this.$el);

		// Select all the nodes inside the component which are being animated, loop through them and remove them from lax.
		this.$el.querySelectorAll(this.$lax.selector).forEach(newLaxEl => {
			this.$lax.removeElement(newLaxEl);
		});
	},
	updated() {
		this.$nextTick(() => {
			this.$lax.updateOrigElement(this.$el);
			// Select all the nodes inside the component which are being aimated, loop through them and update them.
			this.$el.querySelectorAll(this.$lax.selector).forEach(newLaxEl => {
				this.$lax.updateOrigElement(newLaxEl);
			});
		});
	}
};
