<template>

	<el-footer :height="height || '4rem'">
		<slot></slot>
	</el-footer>

</template>

<script>
export default {
	props: ['height']
}
</script>
