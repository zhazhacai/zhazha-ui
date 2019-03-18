<template>

	<el-row :gutter="20" class="unex-personal">

		<el-col :span="6" :offset="18" v-if="token">

			<div class="unex-personal-reunite">
				<el-dropdown :hide-on-click="false" @visible-change="onAppear">
					<div class="unex-personal-info">
						<unex-icon svg="dropdown" :class="{ 'unex-arrow-reverse': visible }"></unex-icon>
						<span>
							<unex-image mode="cover" v-if="info.avatar" :src="info.avatar"></unex-image>
							<unex-icon svg="avatar" v-else></unex-icon>
						</span>
						<div>
							<h4 :class="{ 'unex-personal-name-single': !info.assist }">{{ info.name }}</h4>
							<small v-if="info.assist">{{ info.assist }}</small>
						</div>
					</div>
					<el-dropdown-menu class="unex-personal-dropdown" slot="dropdown">
						<el-dropdown-item v-for="item, index in menu" :key="index">
							<unex-link :href="item.href" :mode="1">{{ item.label }}</unex-link>
						</el-dropdown-item>
						<el-dropdown-item divided v-if="logout">
							<unex-link :href="logout">退出</unex-link>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>

		</el-col>

		<el-col :span="6" :offset="18" v-else>

			<div class="unex-personal-cube">
				<router-link :to="{ name: 'login' }">登录</router-link>
			</div>

		</el-col>

	</el-row>

</template>

<script>
export default {

	props: ['token', 'info', 'menu', 'logout'],

	data ()
	{
		return {

			visible: false,

		}
	},

	watch: {
	},

	methods: {

		onAppear ( visible )
		{
			this.visible = visible;
		},

		init ()
		{
		}
	},

	mounted ()
	{
		return this.init();
	}
}
</script>
