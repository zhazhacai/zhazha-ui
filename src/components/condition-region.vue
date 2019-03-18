<template>

	<div class="unex-region" :style="{ width: extent }">

		<el-row :gutter="20">
			<el-col :span="11"><el-input v-model="value.from" @change="onChange"></el-input></el-col>
			<el-col :span="2">-</el-col>
			<el-col :span="11"><el-input v-model="value.to" @change="onChange"></el-input></el-col>
		</el-row>

	</div>

</template>

<script>
export default {

	props: ['name', 'option', 'event'],

	data ()
	{
		return {

			extent: ( this.option.css || {} ).width,

			value: {
				from: '',
				to: ''
			}

		}
	},

	methods: {

		onChange ( value )
		{
			if ( this.event.onInput )
			{
				this.event.onInput(

					this.name,

					this.option,

					this.value,

					true
				);
			}
		}

	},

	created ()
	{},

	mounted ()
	{
	}

}
</script>
