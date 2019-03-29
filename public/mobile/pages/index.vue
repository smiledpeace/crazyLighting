<template>
    <div>
        <p>{{ data }}</p>

        <My-component text="Crazy Lighting"></My-component>

        <Tab :items="items"></Tab>
    </div>
</template>
<script>

    import MyComponent from '../modules/learn';
    import Tab from '../modules/tab';
    export default {
        data () {
            return {
                data: '1',
                items: ['FLYING', 'SLEEPING', 'EATING']
            }
        },
        created() {
            var x = this.$fn.uuid();
            // console.log(x);
        },
        props: {
            param1: '',
            param2: '',
            param3: '',
            param4: ''
        },
        components: {
            MyComponent,
            Tab
        }
    }
</script>

<style lang="less">

</style>