/**
 * ----------------------------------
 * @file promise.ts
 * @desc Promise基础类封装
 * @author Matrix <18967131010@163.com>
 * @create: 2018/05
 * ----------------------------------
 */
/**
 * Promise Deferred
 */
export declare class Deferred {
    private resolve;
    private reject;
    private then;
    private catch;
    constructor();
}
export declare const promiseQueue: (list: ((...args: any[]) => any)[]) => Promise<any>;
