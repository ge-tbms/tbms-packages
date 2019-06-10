"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findIndex_1 = __importDefault(require("lodash/findIndex"));
const debug_1 = __importDefault(require("./debug"));
/**
 * 执行上下文
 * @class Proto
 * - 处理 '`message`' 对象, 对其进行拦截注入到 '`messages`' 属性
 * - 二次处理不要赋值，尽量采用merge方式。 复制会被拦截及消息唯一性检测
 */
class Proto {
    constructor() {
        this._message = { id: '' };
        this._systemMessage = { id: '' };
        this.messages = [];
        this.systemMessages = [];
    }
    set message(val) {
        if (!val.id)
            throw new TypeError("message must has id element!");
        this._message = val;
        const index = findIndex_1.default(this.messages, { id: val.id });
        if (index === -1) {
            this.messages.push(val);
        }
        else {
            this.messages[index] = val;
            // debug.warn(`Duplicate Message and Update`, val, index)
        }
    }
    get message() {
        return this._message;
    }
    set systemMessage(val) {
        if (!val.id)
            throw new TypeError("message must has id element!");
        this._systemMessage = val;
        const index = findIndex_1.default(this.systemMessages, { id: val.id });
        if (index === -1) {
            this.systemMessages.push(val);
        }
        else {
            this.systemMessages[index] = val;
            debug_1.default.warn(`Duplicate Message and Update`, val, index);
        }
    }
    get systemMessage() {
        return this._systemMessage;
    }
}
exports.default = Proto;
