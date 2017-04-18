var Path = require("path")
var config={
	entry:'./main.js',

	output:{
		
        filename: 'index.js',
	},

	devServer:{
		inline:true,
		port:7777
	},

	module:{
		loaders:[{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loaders:'babel-loader',
			query:{
				presets:['es2015','react']
			}
		}]
	}
}
module.exports=config;