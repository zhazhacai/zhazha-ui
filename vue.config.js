module.exports = {
	productionSourceMap: false,
	css: {
		extract: true,
		loaderOptions: {
			less: {
				javascriptEnabled: true
			},
			sass: {
				data: `@import './src/variable.scss';`
			}
		}
	}
}
