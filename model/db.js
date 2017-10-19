/**
 * Created by hahha on 2017/10/18.
 */
const mongoose = require('mongoose');
// 引入数据库配置文件
const setting = require('../setting');
//这句话说明我们使用的promise对象是ES6中原生的promise对象.
mongoose.Promise = global.Promise;

//调用模块下面的connect方法去连接数据库
const cn = mongoose.connect(`mongodb://${setting.host}/${setting.db}`,{useMongoClient: true});
// 要想测试是否连接成功，就要去掉‘,{useMongoClient: true}’，并且打开下面的注释

// cn.connection.on("open",function(){
//     console.log("数据库已连接");
// });
//
// cn.connection.on("error",function(error){
//     console.log("数据库连接失败");
// });

