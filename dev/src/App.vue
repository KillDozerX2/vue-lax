<template>
	<div id="app">
		<Banner />
	</div>
</template>

<script>
import Banner from "./components/Banner";

export default {
	name: "App",
	components: {
		Banner
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	height: 2000px;
	overflow-x: hidden;
}
</style>
