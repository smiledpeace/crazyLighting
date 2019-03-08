import Fn from './fn';
const util = {};
interface VPrototype { prototype: any; }
const install = (Vue: VPrototype) => {
  Vue.prototype.$fn = Fn;
};

export default Object.assign(util, { install });

