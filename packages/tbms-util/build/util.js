"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ----------------------------------
 * @file util.ts
 * @desc 函数类
 * @author Matrix <18967131010@163.com>
 * @create: 2018/05
 * ----------------------------------
 */
const md5_1 = __importDefault(require("md5"));
exports.md5 = md5_1.default;
const generateId = (conversationId) => {
    const time = +new Date();
    const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    const seed = (S4() + '-' + S4() + '-' + S4() + '-' + S4());
    return md5_1.default(conversationId + '-' + time + '-' + seed);
};
exports.generateId = generateId;
const isArray = (object) => {
    return Object.prototype.toString.call(object).substr(8, 5) === 'Array';
};
exports.isArray = isArray;
const isObject = (object) => {
    return Object.prototype.toString.call(object).substr(8, 6) === 'Object';
};
exports.isObject = isObject;
const isString = (object) => {
    return Object.prototype.toString.call(object).substr(8, 6) === 'String';
};
exports.isString = isString;
const getQueryParam = (qs) => {
    qs = qs.split('+').join(' ');
    let params = {};
    let tokens;
    let re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
};
exports.getQueryParam = getQueryParam;
const getQueryParamByName = (url, name) => {
    if (!url)
        url = location && location.search;
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};
exports.getQueryParamByName = getQueryParamByName;
const promiseMiddleware = (middlewares, ctx) => {
    let promise = Promise.resolve(null);
    let next;
    // 将ctx绑定到每个方法的this以及第一个参数
    middlewares.forEach((fn, i) => {
        middlewares[i] = fn.bind(null, ctx);
    });
    while ((next = middlewares.shift())) {
        promise = promise.then(next);
    }
    return promise.then(() => {
        return ctx;
    });
};
exports.promiseMiddleware = promiseMiddleware;
const addStyle = (styleString) => {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styleString;
    document.getElementsByTagName('head')[0].appendChild(style);
};
exports.addStyle = addStyle;
const objectMapQuery = (obj) => {
    let ret = [];
    for (let key in obj) {
        ret.push(`${key}=${obj[key]}`);
    }
    return ret.join('&');
};
exports.objectMapQuery = objectMapQuery;
exports.default = {
    generateId,
    isArray,
    isObject,
    isString,
    md5: md5_1.default,
    getQueryParam,
    getQueryParamByName,
    promiseMiddleware,
    addStyle,
    objectMapQuery
};
