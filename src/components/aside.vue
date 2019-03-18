<template>

	<el-aside :class="{ 'unex-aside': true, 'unex-aside-collapse': cuttle }" :style="{ 'min-width': width, 'max-width': width}">

		<unex-container :vertical="true">

			<unex-header class="unex-aside-header">

				<unex-container>
					<el-aside width="4rem" @click.native="onCollapse">
						<unex-icon svg="menu-expand" v-if="icon && cuttle"></unex-icon>
						<unex-icon svg="menu-close" v-if="icon && !cuttle"></unex-icon>
					</el-aside>
					<unex-main>
						<unex-link :href="link || 'index'">{{ title }}</unex-link>
							<unex-text>{{ title }}</unex-text>
					</unex-main>
				</unex-container>

			</unex-header>

			<unex-main class="unex-aside-container" height="100%">

				<unex-container>
					<unex-main>
						<div :class="{ 'unex-pin': true }">
							<el-menu :default-active="asActive" @select="onChoose">
								<unex-aside-tree :data="data"></unex-aside-tree>
							</el-menu>
						</div>
					</unex-main>
				</unex-container>

			</unex-main>

		</unex-container>

	</el-aside>

</template>

<script>
export default {
	props: [
		'data',

		'mode',

		'defaultActive',

		'link',

		'title',
		'icon',

		'collapse',

		'width'
	],

	data ()
	{
		return {

			asActive: this.defaultActive || window.localStorage.getItem('asActive'),

			types: this.mode.split(' ') || [],

			cuttle: this.collapse

		}
	},

	methods: {
		onCollapse ()
		{
			this.cuttle = !this.cuttle;
		},
		onChoose (index)
		{
			if ( index )
			{
				window.localStorage.setItem('asActive', index);
			}
		}
	},

	mounted ()
	{
	}
}
</script>
