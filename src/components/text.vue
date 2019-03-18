<template>
	<span class="unex-text">
		<unex-icon :svg="icon" v-if="icon && iconic=='prepend'"></unex-icon>
		<slot></slot>
		<unex-icon :svg="icon" v-if="icon && iconic=='append'"></unex-icon>
	</span>
</template>

<script>
export default {
	props: ['insert', 'icon'],

	data ()
	{
		return {
			iconic: 'prepend'
		}
	},

	methods: {

		initIconic ()
		{
			if ( this.insert )
			{
				this.iconic = this.insert;
			}
		},

		init ()
		{
			this.initIconic();
		}

	},

	mounted ()
	{
		this.init();
	}
}
</script>
