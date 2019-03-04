/**
 * Promise中间实现
 */
import _ from './util';
export default class {
    constructor(middlewares) {
        this.middlewares = [];
        this.ctx = {
            ItemComponent: null,
            message: {},
            conversation: {}
        };
        this.middlewares = middlewares;
    }
    useBatch(steps) {
        if (_.isArray(steps)) {
            this.middlewares = this.middlewares.concat(steps);
        }
        else {
            throw TypeError('useBatch must be arrary!!!');
        }
    }
    dispatch(msg, conversation) {
        let steps = Object.create(this.middlewares);
        let ctx = Object.create(this.ctx);
        ctx.conversation = conversation;
        ctx.message = msg;
        return _.promiseMiddleware(steps, ctx);
    }
}
