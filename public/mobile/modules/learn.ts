/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。它有时被称做“鸭式辨型法”或“结构性子类型化”。
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */

import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    // 所有的组件选项都可以放在这里
    template: `
        <div>
            <strong v-for="item in items">{{ item }}</strong>
            <input type="text">
            <button @click="onClick">{{ text }}</button>
        </div>
    `

})

export default class MyComponent extends Vue {
    @Prop(String) readonly text!: string;




    // 初始数据可以直接声明为实例的属性
    message: string = 'Hello!';
    items: any[] = ['Crazy Lighting', 2, 45, 6];

    // 组件方法也可以直接声明为实例的方法
    onClick (): void {

        window.alert(this.message)
    }

    created() {
        this.message = this.text;
    }

    computed() {

    }


}




