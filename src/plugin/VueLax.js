import lax from "lax.js";

export default {
	install: (Vue, options) => {
		let autoLoad, scrollContainer, selector, updateOnResize;
		if (options) {
			// Destructure flags from options.
			({ autoLoad, scrollContainer, selector, updateOnResize } = options);
		}

		// Check if autoload was provided and was a boolean and assign it a default value of true.
		autoLoad = typeof autoLoad === "boolean" ? autoLoad : true;

		// Check if updateOnResize was provided and was a boolean and assign it a default value of true.
		updateOnResize =
			typeof updateOnResize === "boolean" ? updateOnResize : true;

		// Check if selector was provided and was a string
		if (typeof selector === "string") {
			lax.selector = selector;
		}

		// Create the update lax function.
		// This function runs a recursive loop, calling itself in the requestAnimationFrame callback.
		const updateLax = () => {
			// Update the lax object with the scrollAmount
			lax.update(getScrollAmount());

			// Request Another Animation Frame, with itself as the callback and store the uid returned so this method can be stopped at some later stage.
			lax.animationId = window.requestAnimationFrame(updateLax);
		};

		// This function is used to calculate the amount that has been scrolled
		function getScrollAmount() {
			// Check if scrollContainer exists or not
			if (typeof scrollContainer === "string") {
				return document.querySelector(scrollContainer).scrollTop;
			} else {
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

		// Add a custom updateOrigElement method that will take a DOM element, not a lax element
		lax.updateOrigElement = (el) => {
			// find the laxObject for the element
			const laxObject = lax.elements.find((laxElement) => {
				return laxElement.el === el;
			});
			lax.update(laxObject);
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
	}
};
