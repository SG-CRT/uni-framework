const state = {
	localhost: "大良",
	serviceRegionFilter:['大良街道'],//开通服务的区域筛选数据
}
const mutations = {
	SET_LOCALHOST: (state, address) => {
		state.localhost = address;
	},
}
const actions = {
	
}
const getters = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}