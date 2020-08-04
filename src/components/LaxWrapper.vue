<template>
	<component :is="tagName">
		<slot></slot>
	</component>
</template>

<script>
export default {
	name: "lax-wrapper",
	props: {
		tagName: {
			type: String,
			required: false,
			default: "div"
		},
		laxSelf: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	mounted() {
		// The nextTick callback waits for vue to render child components
		this.$nextTick(() => {
			// Check if the wrapper itself needs to be animated
			if (this.laxSelf) {
				// Add the component element to lax
				this.$lax.addElement(this.$el);
			}

			// Select all the nodes inside the component which have to be animated, loop through them and add them to lax.
			this.$el.querySelectorAll(this.$lax.selector).forEach(newLaxEl => {
				if (newLaxEl !== undefined) {
					this.$lax.addElement(newLaxEl);
				}
			});
		});
	},
	beforeDestroy() {
		// Check if the wrapper is being animated iteself
		if (this.laxSelf) {
			// Remove the component element from lax
			this.$lax.removeElement(this.$el);
		}

		// Select all the nodes inside the component which are being animated, loop through them and remove them from lax.
		this.$el.querySelectorAll(this.$lax.selector).forEach(newLaxEl => {
			if (newLaxEl !== undefined) {
				this.$lax.removeElement(newLaxEl);
			}
		});
	},
	updated() {
		this.$nextTick(() => {
			// Check if the wrapper itself needs to be animated
			if (this.laxSelf) {
				// Add the component element in lax
				this.$lax.updateOrigElement(this.$el);
			}
			// Select all the nodes inside the component which are being aimated, loop through them and update them.
			this.$el.querySelectorAll(this.$lax.selector).forEach(newLaxEl => {
				if (newLaxEl !== undefined) {
					this.$lax.updateOrigElement(newLaxEl);
				}
			});
		});
	}
};
</script>
