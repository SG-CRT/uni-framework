
/**
 * 小程序更新
 */function wxUpdate() {
	//小程序更新
	const updateManager = wx.getUpdateManager();
	updateManager.onCheckForUpdate(function(res) {
		// 请求完新版本信息的回调
		if (res.hasUpdate == true) {

		};
	});
	updateManager.onUpdateReady(function() {
		wx.showModal({
			title: '更新提示',
			content: '检测到新版本更新',
			showCancel: false,
			success(res) {
				if (res.confirm) {
					// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					updateManager.applyUpdate();
				};
			},
		});
	});
	updateManager.onUpdateFailed(function() {
		// 新版本下载失败
		wx.showModal({
			title: '已经有新版本了哟~',
			content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
		});
	});
	console.log("检测更新完成");
}

/**
 * 格式化日期
 * @param {String|Date} inputDate 时间
 * @param {String} type 格式 默认："YYYY-MM-DD HH:mm:ss"
 * @returns {String} 格式化时间
 */
function formatDate(inputDate, type = "YYYY-MM-DD HH:mm:ss") {
	const date = new Date(inputDate)
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');
	if (type == "YYYY-MM-DD HH:mm:ss") {
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	} else {
		return `${year}-${month}-${day}`;
	}
}


/**
 * 格式化手机号码
 * @param {String} phoneNumber 电话号码
 * @returns {String} 格式化号码 130 1234 1234
 */
function formatPhoneNumber(phoneNumber) {
	if(!phoneNumber)return ''
	// 去除字符串中的非数字字符
	const cleanNumber = phoneNumber.replace(/\D/g, '');
	// 使用正则表达式进行格式化
	const formattedNumber = cleanNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1 $2 $3');
	return formattedNumber;
}
export {
	wxUpdate,
	formatDate,
	formatPhoneNumber
}