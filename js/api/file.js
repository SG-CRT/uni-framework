import request from './request.js'
/**
 * 上传图片
 */
export const UploadImg = (parameter) =>{
	return request({
		url:'BaseInfo/UploadImg',
		token:true,
		type:'POST',
		parameter
	})
}