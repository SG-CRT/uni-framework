<template>
	<view class="my-page">
		{{localhost}}
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex' //引入mapGetters
	import share from '@/js/share.js'
	export default {
		components: {
		
		},
		mixins:[share],
		data() {
			return {
				
				
			}
		},
		computed: {
			...mapState({
				localhost:state=>state.map.localhost,
			}),
			
		},
		
		onReady(){
			
			
		},
		onShow() {
			
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	

</style>