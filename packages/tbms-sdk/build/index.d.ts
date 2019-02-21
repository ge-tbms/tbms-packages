/**
 * ----------------------------------
 * @file index.ts
 * @class TBMSSDK
 * @desc 中间件管理 TBMS SDK
 * @author Matrix <18967131010@163.com>
 * @create: 2018/05
 * ----------------------------------
 */
import Middleware from "tbms-middleware";
import { MessageObject, ConversationObject, SystemMessageObject, ErrorStatusObject } from "./global";
export default class TBMSSDK extends Middleware {
    options: any;
    constructor(options?: any);
    /**
     * 触发实时消息
     * @param {object | MessageObject} message 消息体
     * @api dispatchMsg
     */
    dispatchMsg(message: MessageObject): void;
    /**
     * 触发离线消息
     * @param {Object | MessageObject} message 消息体
     * @api dispatchOfflineMsg
     */
    dispatchOfflineMsg(message: MessageObject): void;
    /**
     * 触发会话消息
     * @param {object | ConversationObject} conversation 会话实体
     * @api dispatchConversation
     */
    dispatchConversation(conversation: ConversationObject): void;
    /**
     * 触发系统消息
     * @param {object | systemMessageObject} systemMessage  系统消息
     * @api dispatchSystemMsg
     */
    dispatchSystemMsg(systemMessage: SystemMessageObject): void;
    /**
     * 触发错误信息
     * @param {object | ErrorStatusObject} error 错误信息
     * - error.code 错误码
     * - error.message 错误信息
     */
    dispatchError(error: ErrorStatusObject): void;
    /**
     * 触发登入信息
     * @param {object} login  登入信息
     */
    dispatchLogin(login: any): void;
    /**
     * 发送消息
     * @param {Object | MessageObject} message 消息体
     * @api dispatchSendMsg
     */
    dispatchSendMsg(message: MessageObject): any;
}
