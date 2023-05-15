const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "ru", "uz"],
		defaultLocale: "ru",
		localeDetection: false,
	},
	localePath: path.resolve("./public/locales"),
};
