let url = {
	
}
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
	url ={
		BASE_URL:'https://tczt.jetone.cn:7101/Api/',	
		FILE_URL:'https://tczt.jetone.cn:7101/UploadFile/',
		VIDEO_UPLOAD:'http://192.168.0.56:10010/顺清运/Api/BaseInfo/UploadVideo/',
	}
} else {
	console.log('生产环境');
	url ={
		BASE_URL:'https://tczt.jetone.cn:7101/Api/',
		FILE_URL:'https://tczt.jetone.cn:7101/UploadFile/',
		VIDEO_UPLOAD:'https://tczt.jetone.cn:7101/Api/BaseInfo/UploadVideo'
	}
}

export default {
	...url
};