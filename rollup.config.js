import babel from "@rollup/plugin-babel";
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
	input: "src/index.js",
	output:
	{
		file: pkg.main,
		format: "esm",
	},
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
		eslint(),
		babel({
			exclude: "node_modules"
		}),
		terser()
	]
};
