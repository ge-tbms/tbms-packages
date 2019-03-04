import ProtoContext from './context';
import compose from 'tbms-middleware-compose';
import { EventEmitter } from 'tbms-util';
/**
 * @class 中间件类
 * @description 用于处理消息处理中心，编解码，
 *
 */
export default class Middleware extends EventEmitter {
    constructor(options) {
        super();
        this.options = {
            onerror: (error) => { }
        };
        this.middleware = [];
        this.options = Object.assign(this.options, options);
        this.context = Object.create(new ProtoContext());
    }
    /**
     * 触发函数
     * @param {Object} message  消息体
     */
    dispatch(val) {
        let context = this.createContext(val);
        context = this.handleContextExternal(context, val);
        const fnMiddleware = compose(this.middleware);
        return fnMiddleware(context).catch(this.onerror.bind(this));
    }
    /**
     * 处理上下文，给上下文添加额外参数
     * @param {Object} context 上下文
     */
    handleContextExternal(ctx, val) {
        return ctx;
    }
    /**
     * 创建新的上下文
     * @param {Object} message 创建'`新上下文`'
     */
    createContext(val) {
        const ctx = Object.create(this.context);
        // if (val.message) {
        //   ctx.message = val.message
        // }
        // if (val.systemMessage) {
        //   ctx.systemMessage = val.systemMessage
        // }
        // if (val.error) {
        //   ctx.error = val.error
        // }
        return Object.assign(ctx, val);
    }
    /**
     * 错误回调
     * @param {Object} err    错误
     */
    onerror(err) {
        const msg = err.stack || err.toString();
        console.error(msg.replace(/^/gm, '  '));
        this.options.onerror(err);
    }
    /**
     * 注入中间件函数
     * @param {Function|Array} fn 中间件函数
     */
    use(fn) {
        if (typeof fn !== 'function')
            throw new TypeError('middleware must be function');
        this.middleware.push(fn);
    }
    /**
     * 批量注入中间件
     * @param {Array | ICallback} list  中间件列表
     */
    useBatch(list = []) {
        list.forEach(fn => {
            this.use(fn);
        });
    }
}
