<template>
	<view >
		test
	</view>
</template>

<script>
	


	export default {
		name: 'enjoyUs',
		components: {
			
		},
		props: {
			paramsNumber: {
				type: Number,
				default: 0
			},
		},
		computed: {
			
		},
		data() {
			return {
				

			};
		},

		watch: {
			'paramsNumber'(val) {
				console.log(val);
			}
		},
		
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "enjoyUs.scss";

</style>