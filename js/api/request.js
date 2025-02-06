import url from '../url.js'
const { BASE_URL }=  url
import store from '@/store/index.js';//需要引入store
let interceptors = {
	response: () => {},
	request: () => {}
}
//请求拦截器
interceptors.request = (config) => {
	if(config.token){
		if(!uni.getStorageSync('t')){
			return false
		}
		//判断是否是重发的请求，如果是就将请求url恢复成原始url，如果不是就缓存原始url到rawUrl
		if(config.retransmission != true){
			config.rawUrl = config.url
		}else{
			config.url = config.rawUrl
		}
		if(config.type == 'GET'){
		}else{
			config.url += '?token=' + uni.getStorageSync('t')
		}
	}
	if(config.Token){
		if(!uni.getStorageSync('t')){
			return false
		}
		if(config.type == 'GET'){
			config.url += '?token=' + uni.getStorageSync('t')
		}
	}
	return config
}

//相应拦截器 cacheRequestData缓存的上次请求数据，让登陆过期后触发重新登陆，然后重发上次的请求
interceptors.response = (data,cacheRequestData = {},rawResolve) => {
	if(!data.Status){
		//cacheRequestData.retransmission != true 保证只重发一次，不然有可以陷入死循环
		if(data.Result == '用户秘钥无效，请重新登陆获取' && cacheRequestData.retransmission != true){
			return 'retransmission'
		}
		else if(!data.Result&&!data.Message){
			uni.showToast({
				title: "请求错误",
				icon: 'none'
			})
			return false;
		}
		uni.showToast({
			title: data.Message || data.Result,
			icon: 'none'
		})
		return false;
	}
	return true
}
const request = function (data) {
	return new Promise((resolve, reject) => {
		//请求拦截器
		if(!interceptors.request(data)){
			reject()
			return
		}
		let  {url ='', parameter ={}, header ={}, type = 'GET',loading = false,singleUrl='' } = arguments[0]
		
		
			
		if(loading){
			uni.showLoading({
				mask:true,
			});
		}
		uni.request({
		    url: singleUrl?singleUrl:BASE_URL+url, //仅为示例，并非真实接口地址。
		    data:parameter,
			method:type,
		    header:header,
		    success: (res) => {
				uni.hideLoading();
				let responseResult = interceptors.response(res.data,data,resolve);
				if(data.retransmission){
					data.rawResolve(res.data)
					return
				}
				if(responseResult === true){
					resolve(res.data)
				}else if(responseResult === false){
					reject(res.data)
				}
		    },
			fail:(e)=>{
				uni.hideLoading();
				reject({msg:'网络错误',error:e})
			}
		});
	})
}

export default request;