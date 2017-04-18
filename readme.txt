通过npm安装注意事项
1、命令窗口通过管理员命令启动

2、安装全局包
	npm install babel -g
	npm install webpack -g
	npm install webpack-dev-server -g
3、创建根目录
	mkdir reactApp
	cd reactApp
	npm init
4、添加越来包及插件(注意:这些都是在reactApp文件夹下)
	npm install react --save
	npm install reactdom --save
	同时安装一些babel插件
	npm install babel-core
	npm install babel-loader
	npm install babel-preset-react
	npm install babel-preset-es2015
5、创建文件
	index.html
	App.jsx
	main.js
	webpack.config.js
6、设置编译器服务器载入器
	var Path = require("path");//webpack2
	var config={
		entry:'./main.js',//入口文件

		output:{
			path:__dirname+Path.resolve('./'), //__dirname当前文件
	        filename: 'index.js'
		},

		devServer:{
			inline:true,
			port:7777
		},

		module:{
			loaders:[{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loaders:'babel-loader',  //babel-loader
				query:{
					presets:['es2015','react']
				}
			}]
		}
	}
	module.exports=config;

	注意:
	在组件中,采用ES6语法,如果采用handleClick:function(e)报错,并且不能用,号