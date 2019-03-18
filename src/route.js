export default [
	{
		path: '*',
		redirect: '/'
	},
	{
		path: '/',
		name: 'index',
		component: () => import('./views/index.vue'),
		children: [
			{
				path: '/views/pages/excerpt',
				component: () => import('./views/pages/excerpt.vue'),
				name: 'excerpt',
			},
			{
				path: '/views/pages/tool',
				component: () => import('./views/pages/tool.vue'),
				name: 'tool',
				children: [
					
				]
			},
			{
				path: '/views/pages/front_end_map',
				component: () => import('./views/pages/front_end_map.vue'),
				name: 'front_end_map',
			},
			{
				path: '/views/pages/vue_related',
				component: () => import('./views/pages/vue_related.vue'),
				name: 'vue_related',
			},
		]
	}

]
