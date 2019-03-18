<template>

	<el-submenu v-if="( data.children && data.children.length )" :index="crush( data.id )">

		<template slot="title">
			<unex-text :icon="data.icon">
				<unex-link :href="data.index">{{ data.label }}</unex-link>
			</unex-text>
		</template>

		<unex-aside-tree :data="data.children"></unex-aside-tree>

	</el-submenu>

	<el-menu-item v-else :index="crush( data.id )">

		<unex-text :icon="data.icon">
			<unex-link :href="data.index">{{ data.label }}</unex-link>
		</unex-text>

	</el-menu-item>

</template>

<script>

export default {

	props: {

		data: [Object],

		mode: {

			type: [Number],

			default: 1

		}

	},

	data ()
	{
		return {
		}
	},

	methods: {

		init ()
		{
		}

	},

	mounted ()
	{
		this.init();
	}
}
</script>
