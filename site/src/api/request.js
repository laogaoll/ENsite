 const  api =  async(url = '', data = {}, type = 'GET') => {
    const baseUrl = "http://81.68.185.68" // 基础路径
    //const baseUrl = "http://localhost:8000"
    type = type.toUpperCase(); // 请求方式小写转换成大写
    url = baseUrl + url; // 请求地址的拼接
 
    if (type === 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }
    let requestConfig = {
        credentials: 'same-origin',
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: "cors", // 用来决定是否允许跨域请求  值有 三个 same-origin，no-cors（默认）以及 cores;
        cache: "force-cache" // 是否缓存请求资源 可选值有 default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
    }
 
    if (type === 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }
    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }
}
export default api