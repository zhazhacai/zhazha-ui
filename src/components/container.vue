<template>

	<el-container :class="{ 'is-vertical': vertical }" :style="{ height: max ? '100%' : ( height ) }">
		<slot></slot>
	</el-container>

</template>

<script>
export default {
	props: ['max', 'height', 'vertical']
}
</script>
