//要在命令行使用，所以需要暴露，注意不能使用 export default
module.exports = {
		//1、入口文件,键值对形式，注意value值，根据你项目而定
		entry:"./es6todo.js",
		//2、输出目录,要求输出绝对路径---借鉴node中__dirname
		output:{
			path:__dirname,//__dirname表示绝对路径
			filename:"bundle.js"//文件名称可以随便起，但是默认大家都习惯bundle.js
		},
		//3、配置加载器---模块
		module:{
			loaders:[
			//test表示以js结尾的正则表达式
			//exclude表示不去编译node_modules文件夹下的js文件
			//loader表示以哪一个编译器去解析js文件
				{test:/\.js$/,exclude:/node_modules/,loader:"jsx-loader!babel-loader"},
				{test:/\.scss$/,exclude:/node_modules/,loader:"style-loader!css-loader!sass-loader"}
			]
		}

}
