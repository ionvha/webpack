import axios from "axios";

const instance = axios.create();


// 添加请求拦截器
instance.interceptors.request.use(function(config){
    console.log('请求拦截');
    return config
},function(error){
    // 返回请求错误的数据
    return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use(function(response){
    // 2xx 范围内的状态码都会触发
    console.log('响应拦截器');
    return response.data;
},function(error){
    // 获取错误状态码，
    let {status} = error.response;
    switch(status) {
        case 401:
            alert('token实现，重新登录');
            break;
        case 500:
            alert('500-服务器异常，请稍后再试');
            break;
        default:
            alert('服务器异常，请稍后再试');
    }
    return Promise.reject(error);
});

export default instance;