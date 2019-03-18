<template>

	<div class="unex-tree">
		<el-popover
			ref="pop"
			trigger="click"

			@show="onShow"

			@hide="onHide"

			:width="suffix( extent )">
				<el-tree
					:data="option.tree"

					node-key="id"

					ref="tree"

					:show-checkbox="true"
					:default-expand-all="true"
					:highlight-current="true"
					:auto-expand-parent="true"

					:default-checked-keys="option.preset"

					@check="onChoose"

					:props="option.props">
				</el-tree>
		</el-popover>

		<div :class="{ 'unex-input': true, 'active': popState }" v-popover:pop :style="{ width: extent }">
			<span class="el-tag el-tag--info el-tag--small" v-for="value, index in pond" :key="index">{{ value }}</span>
		</div>

	</div>

</template>

<script>
export default {

	props: ['name', 'option', 'event'],

	data ()
	{
		return {

			extent: ( this.option.css || {} ).width,

			popState: false,

			pond: []

		}
	},

	methods: {

		onShow ()
		{
			this.popState = true;
		},

		onHide ()
		{
			this.popState = false;
		},

		onChoose ( data )
		{

			return ( ( data ) => {

				this.pond = Kit.keys( data.nodes, 'label' );

				if ( this.event.onInput )
				{
					this.event.onInput(

						this.name,

						this.option,

						data,

						true

					);
				}

			})

			({

				active: data,

				keys: this.$refs.tree.getCheckedKeys(),

				nodes: this.$refs.tree.getCheckedNodes()

			});

		}

	},

	created ()
	{},

	mounted ()
	{
		this.pond = Kit.keys( this.$refs.tree.getCheckedNodes(), 'label' );
	}

}
</script>
