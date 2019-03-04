/**
 * ----------------------------------
 * @file promise.ts
 * @desc Promise基础类封装
 * @author Matrix <18967131010@163.com>
 * @create: 2018/05
 * ----------------------------------
 */
const resolved = Promise.resolve();
/**
 * Promise Deferred
 */
export class Deferred {
    constructor() {
        const p = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        this.then = p.then.bind(p);
        this.catch = p.catch.bind(p);
    }
}
export const promiseQueue = (list) => {
    let resolved = Promise.resolve({});
    list.forEach((fn, index) => {
        if (typeof fn !== 'function')
            throw new TypeError('Promise cell must be function');
        resolved = resolved.then((context) => fn(context));
    });
    return resolved;
};
