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
   新建一个webpack.config.js，这里使用webpack2来打包jsx
	var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname + "/app/js",
    entry: {
        login: ["./login.js"], // 为了将来的多入口写法
    },
    devtool: "source-map", // 为了可以在控制台跟踪到自己的代码位置，精确到行
    output: {
        path: path.resolve(__dirname,"static/js"), // 输出目录
        filename: "[name].bundle.js", // 输出文件名
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react", "babel-polyfill"]   // 打包模块，babel-polyfill是为了让axios兼容ie的，，不用promise对象可以不写
                    }
                }]
            },
            {
                test: /\.css$/,       // 这个是错的，无法导入css，导入就报错，，哪位大神看到了欢迎留言告诉我。。
                exclude: /node_modules/,          
                use: [{
                    loader: "babel-loader",
                    options: {presets: ["style-loader", "css-loader"]}
                }]
                // 其中css-loader用于解析，而style-loader则将解析后的样式嵌入js代码。
            }
        ]
    },
    devServer: {             // 打包加自动刷新，webpack-dev-server --hot 可以自动热替换，，，虽然我并没有感觉到有多快。。。
        contentBase: __dirname,
        host: '0.0.0.0',
        port: 5005,
        inline: true,
        historyApiFallback: true,
    }
}

	注意:
	在组件中,采用ES6语法,如果采用handleClick:function(e)报错,并且不能用,号

	路由：路由是一个容器
	npm install --save-dev react-router@4
	npm install --save-dev react-router-dom



	import React from 'react'
	import {
	  BrowserRouter as Router,
	  Route,
	  Link
	} from 'react-router-dom'

	const BasicExample = () => (
	  <Router>     // 创建一个路由
	    <div>
	      <ul>  // Link 组件 相当于a标签，to属性相当于a标签中的href，可以打开控制台看到，
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/topics">Topics</Link></li>
	      </ul>

	      <hr/>
	      // 监听路由，地址栏的变化，，很抱歉exact的意思我现在都不知道，观察到exact 在跟路由下，和exact={activeOnlyWhenExact}
	      <Route exact path="/" component={Home}/>  // 如果地址栏访问了跟路径，比如http://localhost:5005/  就会去渲染<Home /> 组件
	      <Route path="/about" component={About}/>  // 如果地址栏访问了/about 路径，比如http://localhost:5005/about  就会去渲染<About/> 组件
	      <Route path="/topics" component={Topics}/> // 如果地址栏访问了topics 路径，比如http://localhost:5005/topics  就会去渲染<Topics/> 组件
	    </div>
	  </Router>
	)