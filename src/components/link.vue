<template>
	<a :href="href" v-if="detect( href, 'http' )"><slot></slot></a>
	<router-link :to="[ { name: href }, { path: href } ][ ~~mode ]" v-else><slot></slot></router-link>
</template>

<script>
export default {

	props: ['href', 'mode', 'info'],

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
