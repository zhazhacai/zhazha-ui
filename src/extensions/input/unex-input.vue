<script>
    export default {
        name : `unex-input`,
        functional : true,
        render (createElement, context) {
            console.log(context)
            var self=this;
            console.log(self)
            return createElement(`el-input`, {
                props : {
                    ...context.props,
                },
                on:{
                    change() {


                    }

                }
            }, [
                context.slots().default, //  also pass default slot to child
            ])

        },
        methods:{

        }
    };
</script>