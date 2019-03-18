<template>
	<i v-if="mode" :style="{ 'background-image': 'url(' + url + ')', 'width': width, 'height': height }" :class="'image-' + mode"></i>
	<img v-else :src="url" :width="width" :height="height" />
</template>

<script>
export default {

	props: ['src', 'width', 'height', 'mode'],

	data ()
	{
		return {
			url: this.src,
			err: '',
		}
	},

	watch: {
		src ( current, origin )
		{
			this.detect( current );
		}
	},

	methods: {

		detect ( link )
		{
			return ( (pro) => {

				pro.then(
					(img) => {
						this.url = img.src;
					},
					(url) => {
						this.url = this.err;
					}
				);

			})
			(
				new Promise( (resolve, reject) => {

					return ( (img) => {

						img.onload = () => {
							resolve( img );
						}

						img.onerror = () => {
							reject( link );
						}

						img.src = link;

					})
					( new Image() );

				})
			)
		},

		init ()
		{
			this.detect( this.src );
		},

	},

	mounted ()
	{
		return this.init();
	}
}
</script>
