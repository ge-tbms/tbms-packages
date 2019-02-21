import { ICallback, OptionParam, ContextObject } from './global';
import EventEmitter from 'tbms-util/build/event';
/**
 * @class 中间件类
 * @description 用于处理消息处理中心，编解码，
 *
 */
export default class Middleware extends EventEmitter {
    options: OptionParam;
    private middleware;
    private context;
    constructor(options?: object);
    /**
     * 触发函数
     * @param {Object} message  消息体
     */
    dispatch(val: ContextObject): any;
    /**
     * 处理上下文，给上下文添加额外参数
     * @param {Object} context 上下文
     */
    handleContextExternal(ctx: ContextObject, val: ContextObject): ContextObject;
    /**
     * 创建新的上下文
     * @param {Object} message 创建'`新上下文`'
     */
    createContext(val: ContextObject): any;
    /**
     * 错误回调
     * @param {Object} err    错误
     */
    onerror(err: any): void;
    /**
     * 注入中间件函数
     * @param {Function|Array} fn 中间件函数
     */
    use(fn: ICallback): void;
    /**
     * 批量注入中间件
     * @param {Array | ICallback} list  中间件列表
     */
    useBatch(list?: ICallback[]): void;
}
