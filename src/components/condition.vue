<template>

	<el-row :gutter="20">

		<el-form

			:model="form"
			:rules="rule"

			:label-width="option.label"
			:class="{ 'unex-condition': true, 'unex-exquisite': option.exquisite }"

			ref="form">

			<el-col v-if="infix == 'prepend'">
				<slot></slot>
			</el-col>

			<el-col :span="24 / ( one.column || option.column )" v-for="one, name in condition" :key="name">

				<el-form-item :label="one.label" :prop="name" :ref="name">

					<!-- Input -->
					<el-input
						v-if="one.mode === 'input'"
						v-model="form[ name ]"

						:placeholder="one.placeholder"
						:clearable="true"

						:style="one.css"

						@input="( value ) => onInput( name, one, value )">
							<i class="el-icon-edit el-input__icon" slot="suffix"></i>
					</el-input>

					<!-- Auto Complete -->
					<el-autocomplete
						v-if="one.mode === 'autocomplete'"
						v-model="form[ name ]"

						:placeholder="one.placeholder"
						:fetch-suggestions="( query, callback ) => isAutocompleteSuggestion( name, one, query, callback )"

						:style="one.css"

						@select="( value ) => onInput( name, one, value )"
						>
							<i class="el-icon-edit el-input__icon" slot="suffix"></i>
							<template slot-scope="props">
								<div>{{ props.item.value || props.item }}</div>
							</template>
					</el-autocomplete>

					<!-- Select -->
					<el-select
						v-if="one.mode === 'select'"
						v-model="form[ name ]"

						:placeholder="one.placeholder"

						@change="( value ) => onInput( name, one, value )">
							<el-option
								v-for="item, index in one.preset" :key="index"

								:label="item.label"
								:value="item.value">
									{{ item.label }}
							</el-option>
					</el-select>

					<!-- Checkbox -->
					<el-checkbox-group
						v-if="one.mode === 'checkbox'"
						v-model="form[ name ]"

						@change="( value ) => onInput( name, one, value )"
						>
							<el-checkbox
								v-for="item, index in one.preset" :key="index"
								:label="item.value"

								border>
								{{ item.label }}
							</el-checkbox>
					</el-checkbox-group>

					<!-- Radio -->
					<el-radio-group
						v-if="one.mode === 'radio'"
						v-model="form[ name ]"

						@change="( value ) => onInput( name, one, value )"
						>
							<el-radio
								v-for="item, index in one.preset" :key="index"
								:label="item.value"

								border>
								{{ item.label }}
							</el-radio>
					</el-radio-group>

					<!-- Tree -->
					<unex-condition-tree
						v-if="one.mode === 'tree'"
						:name="name"
						:option="one"

						:event="{ onInput }">
					</unex-condition-tree>

					<!-- Region -->
					<unex-condition-region
						v-if="one.mode === 'region'"
						:name="name"
						:option="one"

						:event="{ onInput }">
					</unex-condition-region>

				</el-form-item>

			</el-col>

			<el-col v-if="infix == 'append'">
				<slot></slot>
			</el-col>

		</el-form>

	</el-row>

</template>

<script>
export default {

	/* !!
	 * Condition: Condition
	 * Option: Config
	 * Infix: Insert
	 * ===== ===== =====
	 */
	props: ['condition', 'option', 'infix'],

	data ()
	{
		return {

			test: 'ZhaZha Tes Data',

			form: {},

			rule: {},

		}
	},

	methods: {

		initOption ()
		{
			Kit.foreach( this.condition, ( one, name ) => {

				this.$set( this.form, name, one.value );

				this.$set( this.rule, name, one.rule );

			});
		},

		isAutocompleteSuggestion ( name, one, query, callback )
		{
			callback(

				query ? one.preset.filter( (it) => { return !!~( it.value || it ).indexOf( query ) }) : ( one.preset || [] )

			)
		},

		onInput ( name, one, depot, bind )
		{
			if ( bind )
			{
				this.form[ name ] = depot;
			}

			if ( one.extend )
			{
				one.extend( depot, this.form );
			}
		},

	},

	created ()
	{
		this.initOption();
	},

	mounted ()
	{
	}
}
</script>

<style>
</style>
