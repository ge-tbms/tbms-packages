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
  public options: any = {
    appkey: "",
    biz: "",
    targetId: "",
    account: "",
    onlogin: () => {},
    onerror: () => {},
    onconnect: () => {},
    onclose: () => {},
    onmsg: () => {},
    onsystemmsg: () => {},
    onofflinemsg: () => {},
    onconversation: () => {}
  };

  constructor(options?: any) {
    super(options);
    this.options = Object.assign(this.options, options);
    this.app = {
      appkey: this.options.appkey,
      biz: this.options.biz,
      targetId: this.options.targetId,
      account: this.options.account
    };
  }
  /**
   * 触发实时消息
   * @param {object | MessageObject} message 消息体
   * @api dispatchMsg
   */
  dispatchMsg(message: MessageObject) {
    this.dispatch({ message: message }).then((result: any) => {
      this.options.onmsg(result.message, result)
    })
  }
  /**
   * 触发离线消息
   * @param {Object | MessageObject} message 消息体
   * @api dispatchOfflineMsg
   */
  dispatchOfflineMsg(message: MessageObject) {
    this.dispatch({ message: message }).then((result: any) => {
      this.options.onofflinemsg(result.message, result);
    });
  }

  /**
   * 触发会话消息
   * @param {object | ConversationObject} conversation 会话实体
   * @api dispatchConversation
   */
  dispatchConversation(conversation: ConversationObject) {
    this.dispatch({ conversation: conversation }).then((result: any) => {
      this.options.onconversation(result.conversation, result);
    });
  }
  /**
   * 触发系统消息
   * @param {object | systemMessageObject} systemMessage  系统消息
   * @api dispatchSystemMsg
   */
  dispatchSystemMsg(systemMessage: SystemMessageObject) {
    this.dispatch({ systemMessage: systemMessage }).then((result: any) => {
      this.options.onsystemmsg(result.systemMessage, result);
    });
  }
  /**
   * 触发错误信息
   * @param {object | ErrorStatusObject} error 错误信息
   * - error.code 错误码
   * - error.message 错误信息
   */
  dispatchError(error: ErrorStatusObject) {
    this.dispatch({error: error}).then((result: any) => {
      this.options.onerror(result.error, result);
    })
  }

  /**
   * 触发登入信息
   * @param {object} login  登入信息
   */
  dispatchLogin(login: any) {
    this.options.onlogin(login);
  }
  /**
   * 发送消息
   * @param {Object | MessageObject} message 消息体
   * @api dispatchSendMsg
   */
  dispatchSendMsg(message: MessageObject) {
    return this.dispatch({ encodeMessage: message });
  }
}
