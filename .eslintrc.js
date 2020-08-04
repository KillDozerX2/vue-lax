module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/essential", "eslint:recommended"],
	parserOptions: {
		parser: "babel-eslint"
	},
	plugins: ["vue"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["off", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	}
};
