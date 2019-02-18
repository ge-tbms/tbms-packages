export enum SecenType {
  p2p = 'single',
  team = 'team'
}

export enum MessageType {
  text = 'text',
  image = 'image',
  audio = 'audio',
  video = 'video',
  file = 'file',
  geo = 'geo',
  tip = 'tip',
  custom = 'custom',
  notification = 'notification'
}

export enum FlowObject {
  in = 'in',
  out = 'out'
}

export enum StatusObject {
  sending = 'sending',
  success = 'success',
  fail = 'fail'
}

export enum BC_MESSAGE_TYPE {
  'text' = 0,
  'image' = 1,
  'voice' = 2
}


/**
 * 消息结构体
 * @namespace
 * @name MessageObject
 *
 * @property {string | number} id
 * @property {string | number} conversationId
 * @property {string | number} clientId
 * @property {SecenType} scene
 * @property {MessageType} type
 * @property {string} from
 * @property {string} to
 * @property {FlowObject} flow
 * @property {StatusObject} status
 * @property {string | number} content
 * @property {object} file
 * @property {object} geo
 * @property {string} tip
 * @property {string} custom
 * @property {boolean} resend
 */

export declare interface MessageObject {
  id: string | number,
  conversationId: string | number,
  clientId?: string | number,
  scene?: SecenType,
  type?: MessageType,
  from?: string,
  to?: string,
  time?: string | number,
  flow?: FlowObject,
  status?: StatusObject,
  content?: string | number,
  file?: object,
  geo?: object,
  tip?: string,
  custom?: string,
  resend?: boolean
}


/**
 * 消息体结构体
 * @namespace
 * @name ConversationObject
 * @property {string | number} id     会话Id
 * @property {string} scene           场景
 * @property {SecenType} to           目标对象
 * @property {number} updateTime      更新时间
 * @property {string} lastMsg
 * @property {string} custom
 */
export declare interface ConversationObject {
  id: string | number
  scene?: SecenType,
  to?: string,
  updateTime?: number,
  unread?: number,
  lastMsg?: string,
  custom?: string
}

/**
 * 系统消息数据结构
 * @namespace
 * @name SystemMessageObject
 * @property {string | number} id
 * @property {number} time
 * @property {string} type
 * @property {string} from
 * @property {string} to
 * @property {SecenType} scene
 * @property {string} content
 * @property {string} custom
 */
export declare interface SystemMessageObject {
  id: string | number,
  time?: number,
  type?: string,
  from?: string,
  to?: string,
  read?: boolean,
  state?: string,
  scene?: SecenType,
  content?: string,
  custom?: string
}

export declare interface ErrorStatusObject {
  code?: string | number,
  message?: string | object
}
