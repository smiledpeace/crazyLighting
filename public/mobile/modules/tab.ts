import { Vue, Component, Prop } from 'vue-property-decorator';


@Component({
    // 所有的组件选项都可以放在这里
    template: `
        <div class="tab-header" flex="cross:center" ref="slide">
            <button class="tab-item" v-for="item in items" :class="{active: item === curItem}"  @click="onClick($event, item)">
                <span class="tab-item--content">
                    <span class="tab-item--label">{{ item }}</span>
                </span>
                <span class="tab-item--indicator">
                    <span class="tab-item--underline" ></span>
                </span>
                <span class="tab-item--ripple "></span>
            </button>
        </div>
    `

})

export default class MyComponent extends Vue {
    @Prop(Array) readonly items!: any;


    // 初始数据可以直接声明为实例的属性
    message: string = 'Hello!';
    curItem: string = '';
    nowActive: number = 0;

    // 组件方法也可以直接声明为实例的方法
    onClick (evt: Event, item: string ): void {
        console.log();
        const el = evt.target as HTMLElement;
        this.nowActive = el.offsetWidth;
        this.curItem = item;
        this.computedActive();
    }

    computedActive() {
        // $(this.$refs.itemwrap).animate({
        //     scrollLeft: this.nowActive * 80 / 2
        // }, 300)
        let el = this.$refs.slide as HTMLElement;
        let offset: number = el.offsetWidth;
        console.log(el.style);
        el.style.setProperty('--underline-left', `-${offset - this.nowActive }px`)
    }

    created() {

    }


    computed() {

    }


}