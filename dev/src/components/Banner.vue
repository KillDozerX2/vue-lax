<template>
	<div id="banner">
		<VueLogo />
		<h2
			class="lax"
			data-lax-scale="0 0.8, vh 1.2"
			data-lax-opacity="0 1, (vh*0.5) 0"
		>Awesum Vue Plugin to use lax.js</h2>
	</div>
</template>
<script>
import VueLogo from "../assets/Vue Lax Logo.svg";
export default {
	components: {
		VueLogo
	},
	mounted() {
		console.log(this.$lax);
	}
};
</script>

<style scoped>
.banner-img {
	margin: auto;
	margin-top: 200px;
	overflow: visible;
}
</style>