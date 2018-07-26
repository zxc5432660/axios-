import  { fetch } from './fetch'

//定义获取数据的函数getData(),其中url,type,data对应fetch(config)中的config
export  function getData(type,data) {
        if(type==='')
          type = 'get';
        return fetch({
    //这里的url为baseURL下接口地址，如baseURL为'www.baidu.com',接口地址为'www.baidu.com/api/getdata',那么url里就写'api/getdata'
          method: type,
          params: data
        })
    }
