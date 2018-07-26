import axios from 'axios'
import QS from 'qs';
// let uToken = localStorage["userToken"];
// let uerTk = 'hicores'+' '+ uToken;

//定义fetch函数，config为配置
export function fetch(config){
   //返回promise对象
   return new Promise((resolve,reject) =>{
       //创建axios实例，把基本的配置放进去
       const instance = axios.create({
           //定义请求文件类型
           headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            },      
            timeout: 6000,
            //定义请求根目录
            baseURL: process.env.BASE_API,
            dataType: 'json',
            data:{},
           
        });
       //请求成功后执行的函数
        instance(config).then(res =>{
           // console.log(res);
            resolve(res);
        //失败后执行的函数
        }).catch(err => {
            console.log(err);
            reject(err);
        })
     
    });
}
