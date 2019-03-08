import Fn from './fn';
const util = {};

const install = Vue => {
  Vue.prototype.$fn = Fn;
};

export default Object.assign(util, { install });

