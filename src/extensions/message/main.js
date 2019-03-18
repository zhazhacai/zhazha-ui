import Vue from 'vue';
import Main from './message';
let MessageCtr = Vue.extend( Main );

let instance;

const Message = function( options ) {
    if (Vue.prototype.$isServer) return;
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    instance = new MessageCtr({
        data: options
    });
    instance.id = 'unex-message';
    instance.vm = instance.$mount();
    document.body.appendChild( instance.vm.$el );
    instance.vm.show = true;
    instance.dom = instance.vm.$el;
    instance.dom.style.zIndex = '2000';
    return instance.vm;
};

['success', 'error'].forEach(type => {
    Message[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return Message(options);
    };
});
export default Message;