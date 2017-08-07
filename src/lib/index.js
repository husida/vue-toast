import ToastComponent from './toast.vue'

let Toast = {};
let $vm;
Toast.install = function (Vue, options) {
    Vue.prototype.$toast = (tips, position='default') => {
        let toastTpl = Vue.extend(ToastComponent); // 添加toast组件构造器
        if (!$vm) {
            $vm = new toastTpl();// 创建实例
        }
        document.body.appendChild($vm.$mount().$el);// 使用原生DOM API插入文档中
        $vm.show = true;
        $vm.text = tips;
        $vm.position = 'toast-'+position;
    }
};
export default Toast;