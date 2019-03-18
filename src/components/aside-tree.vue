<template>

	<el-menu-item-group>
		{{data}}
		<el-menu-item-group v-for="item, index in data" :key="crush( item.id )">

			<unex-aside-node :data="item"></unex-aside-node>

		</el-menu-item-group>

	</el-menu-item-group>

</template>

<script>
export default {
	props: [ 'data', 'defaultActive']
}
</script>
