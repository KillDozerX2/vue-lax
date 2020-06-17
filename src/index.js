import lax from "lax.js";

export default {
	name: "VueLax",
	install: (Vue, options) => {
		let autoLoad, scrollContainer, selector, frameRate, updateOnResize;
		if (options) {
			// Destructure flags from options.
			({ autoLoad, scrollContainer, selector, frameRate, updateOnResize } = options);
		}
		// Check if autoload was provided and was a boolean and assign it a default value of true.
		autoLoad = (typeof (autoLoad) === "boolean") ? autoLoad : true;

		// Check if updateOnResize was provided and was a boolean and assign it a default value of true.
		updateOnResize = (typeof (updateOnResize) === "boolean") ? updateOnResize : true;

		// Check if selector was provided and was a boolean
		selector = (typeof (selector) === "string") ? selector : ".lax";

		// Create the update lax function. If the frame rate is provided the animations get toggled. This function runs a recursive loop, calling itself in the requestAnimationFrame callback.
		const updateLax = (typeof (frameRate) === "number") ? () => {
			setTimeout(function () {
				lax.update(getScrollAmount());
				lax.animationId = window.requestAnimationFrame(updateLax);
			}, 1000 / frameRate);
		} : () => {
			// Update the lax object with the scrollAmount
			lax.update(getScrollAmount());

			// Request Another Animation Frame, with itself as the callback and store the uid returned so this method can be stopped at some later stage.
			lax.animationId = window.requestAnimationFrame(updateLax);
		};

		// This function is used to calculate the amount that has been scrolled
		function getScrollAmount() {
			if (typeof (scrollContainer) === "string") {
				return document.querySelector(scrollContainer).scrollTop;
			}
			else {
				return window.scrollY;
			}
		}

		// Create the start method on lax
		lax.start = () => {
			lax.setup();
			lax.animationId = window.requestAnimationFrame(updateLax);
		};
		// Create the stop method on lax
		lax.stop = () => {
			if (lax.animationId) {
				window.cancelAnimationFrame(lax.animationId);
				lax.animationId = null;
			}
			else {
				console.warn("stop called when lax was not running beforehand. Skipping stop.");
			}
		};
		// Call start if autoload was not set to false.
		if (autoLoad) {
			lax.start();
		}

		// Add the screen resize listener
		if (updateOnResize) {
			window.addEventListener("resize", () => {
				lax.updateElements();
			});
		}
		// Add lax as a vue prototype property
		Vue.prototype.$lax = lax;

		Vue.mixin({
			mounted() {
				// Select all the nodes inside the component which have to be animated, loop through them and add them to lax.
				this.$el.querySelectorAll(selector).forEach((newLaxEl) => {
					let isSameNode = false;
					for (let i in lax.elements) {
						if (lax.elements[i].el.isSameNode(newLaxEl)) {
							isSameNode = true;
							break;
						}
					}
					if (!isSameNode) {
						lax.addElement(newLaxEl);
					}
				});
			},
			beforeDestroy() {
				// Select all the nodes inside the component which are being animated, loop through them and remove them from lax.
				this.$el.querySelectorAll(selector).forEach((newLaxEl) => {
					if (!lax.elements.includes(newLaxEl)) {
						lax.removeElement(newLaxEl);
					}
				});
			}
		});
	}
};