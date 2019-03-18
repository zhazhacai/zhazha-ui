<template>

	<el-main class="unex-main" :style="{ width, height }">
		<slot></slot>
	</el-main>

</template>

<script>
export default {
	props: ['width', 'height']
}
</script>
