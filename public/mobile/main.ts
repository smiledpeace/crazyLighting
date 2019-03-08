// import Vue from 'vue';
// import App from './app';
// import vueUtil from '../js/common/vueUtil';
// Vue.use(vueUtil);
// require('../styles/mobile/index.less');
// const vm = new Vue({
//     el: '#app',
//     data: {
//         type: document.getElementById('type').value || '',
//         param1: document.getElementById('param1').value || '',
//         param2: document.getElementById('param2').value || '',
//         param3: document.getElementById('param3').value || '',
//         param4: document.getElementById('param4').value || '',
//     },
//     components: {
//         App
//     }
// });

interface labelObj {
    label: string
}

function printTpl(lab: labelObj) {
    console.log(lab.label);
}
let obj = {
    label: '123'
}
printTpl(obj);