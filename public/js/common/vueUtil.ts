import Fn from './fn';
const util = {};
const install = (Vue: any) => {
    Vue.prototype.$fn = Fn;
};

export default Object.assign(util, { install });

