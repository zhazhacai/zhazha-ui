<template>

	<el-header :class="{ 'unex-header': true }" :height="height || '5rem'">
		<slot></slot>
	</el-header>

</template>

<script>
export default {
	props: ['height']
}
</script>
