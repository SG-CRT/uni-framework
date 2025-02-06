
<script>
	import {wxUpdate} from '@/js/utils.js'
	export default {
		onLaunch: function() {
			// 可以查阅uView的配置文件得知当前版本号，具体位置为：/uview-ui/libs/config/config.js
			wxUpdate()
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	
</style>
