import Vue from 'vue';
import App from './pages/index.vue';
import vueUtil from '../js/common/vueUtil';
Vue.use(vueUtil);
import MyComponent from './modules/learn';
import EventEmitter from './modules/emitter';

console.log(MyComponent);
console.log(EventEmitter);
// require('../styles/mobile/index.less');
const type = <HTMLInputElement>document.getElementById('type');
const param1 = <HTMLInputElement>document.getElementById('param1');
const param2 = <HTMLInputElement>document.getElementById('param2');
const param3 = <HTMLInputElement>document.getElementById('param3');
const param4 = <HTMLInputElement>document.getElementById('param4');

const m = new EventEmitter({});

let val:number = 0;

const vm = new Vue({
    el: '#app',
    data: {
        type: type.value,
        param1: param1.value,
        param2: param2.value,
        param3: param3.value,
        param4: param4.value,
        log: ''
    },
    created() {
        console.log(this);
        console.log(m);

    },
    components: {
        App,
        MyComponent
    }
});


interface SquareConfig {
    /**
     * 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
     */
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig) {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: 'red'});
console.log(mySquare);

/**
 * 一些对象属性只能在对象刚刚创建的时候修改其值
 */
interface Point  {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };

console.log(p1);

// vm.log = mySquare;

m.emit("mock event", 18);

