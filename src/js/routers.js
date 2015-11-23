module.exports = function(router){


	router.map({
		'/':{
			name:'home',
			component:require('./pages/home.vue')
		},
		'/bus':{
			name:'bus',
			component:require('./pages/bus.vue')
		},
		'/transport':{
			name:'transport',
			component:require('./pages/transport.vue')
		}
	})

}