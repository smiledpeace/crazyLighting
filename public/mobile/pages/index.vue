<template>
    <div>{{ data }}</div>
</template>
<script>
    export default {
        data () {
            return {
                data: '1'
            }
        },
        created() {
            var x = this.$fn.uuid();
            console.log(x);
        },
        props: {
            param1: '',
            param2: '',
            param3: '',
            param4: ''
        }
    }
</script>