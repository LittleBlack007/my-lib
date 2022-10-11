import packages from '../package.json'
//读取utils文件夹，自动解析函数。
// const routerfiles = require.context("./utils", true, /\.js$/)
let utils = {};
//添加每个路由节点
// routerfiles.keys().forEach((key) => {
//     const routerfilesObj = routerfiles(key).default;
//     for (let key in routerfilesObj) {
//         utils[key] = routerfilesObj[key];
//     }
// });
// Number.prototype._toFixed = toFixed
// Number.prototype._round = round
// Number.prototype.percentNum = percentNum
// Number.prototype.bankNum = bankNum
//打印版本号
console.log("%c my-lib"+"%c"+packages.version," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em",'font-size:1em')

//vue 单页面组件


//读取components文件夹，自动解析函数。
const componentsfiles = require.context("./components", true, /index\.js$/)
// 存储组件列表
const components = [];
//添加每个路由节点
componentsfiles.keys().forEach((key) => {
    const routerfilesObj = componentsfiles(key).default;
    for (let key in routerfilesObj) {
        components.push(routerfilesObj[key]);
    }
});
console.log(components,componentsfiles);

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    // 判断是否安装
    if (install.installed) return;
    install.installed=true;
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表,
    ...utils
};

//ES6语法导出
export {
    install,
    // accountHelper,
    // imgHelper,
    // routerHelper,
    // fixedTable,
    // amplifierDom,
    // componentTable,
    // downLoadFileZip
    // autobuttonlayout,
}