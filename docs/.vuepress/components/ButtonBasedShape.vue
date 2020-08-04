<template>
	<div>
		<button :class="{ 'active': isActive }" type="button" @click="isActive = !isActive">{{ message }}</button>
		<LaxWrapper class="shape-container" v-if="isActive">
			<div class="shape lax" data-lax-scale="0 0.6, (0.6*vh) 1" data-lax-opacity="0 0.2, (0.6*vh) 1">
				<span>Watch this ellipse get darker and bigger as you scroll up</span>
			</div>
		</LaxWrapper>
	</div>
</template>

<script>
import { LaxWrapper } from "../../../src/main";
export default {
	data: () => {
		return {
			isActive: false
		};
	},
	components: {
		LaxWrapper
	},
	computed: {
		message() {
			if (this.$data.isActive) {
				return "Click to hide";
			} else {
				return "Click to show";
			}
		}
	}
};
</script>

<style scoped>
button {
	color: #17a2b8;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid #17a2b8;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button.active {
	color: #ffffff;
	background-color: #17a2b8;
}
.shape-container {
	height: 120vh;
	width: 100%;
	display: flex;
	align-items: center;
}
.shape {
	background-color: #17a2b8;
	height: 60vh;
	width: 100%;
	border-radius: 50%;
	padding: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
}
</style>