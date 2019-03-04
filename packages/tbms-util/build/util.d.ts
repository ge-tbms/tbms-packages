/**
 * ----------------------------------
 * @file util.ts
 * @desc 函数类
 * @author Matrix <18967131010@163.com>
 * @create: 2018/05
 * ----------------------------------
 */
import md5 from 'md5';
declare const generateId: (conversationId: number) => any;
declare const isArray: (object: object) => boolean;
declare const isObject: (object: object) => boolean;
declare const isString: (object: object) => boolean;
declare const getQueryParam: (qs: string) => any;
declare const getQueryParamByName: (url: string, name: string) => string | null;
declare const promiseMiddleware: (middlewares: any[], ctx: any) => Promise<any>;
declare const addStyle: (styleString: string) => void;
declare const objectMapQuery: (obj: any) => string;
declare const getImageDimension: (url: string) => Promise<{}>;
declare const scrollDocumentTitle: () => (title: string) => any;
export { generateId, isArray, isObject, isString, md5, getQueryParam, getQueryParamByName, promiseMiddleware, addStyle, objectMapQuery, scrollDocumentTitle, getImageDimension };
declare const _default: {
    generateId: (conversationId: number) => any;
    isArray: (object: object) => boolean;
    isObject: (object: object) => boolean;
    isString: (object: object) => boolean;
    md5: any;
    getQueryParam: (qs: string) => any;
    getQueryParamByName: (url: string, name: string) => string | null;
    promiseMiddleware: (middlewares: any[], ctx: any) => Promise<any>;
    addStyle: (styleString: string) => void;
    objectMapQuery: (obj: any) => string;
    scrollDocumentTitle: () => (title: string) => any;
    getImageDimension: (url: string) => Promise<{}>;
};
export default _default;
