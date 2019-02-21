import { MessageObject } from "./global";
/**
 * 执行上下文
 * @class Proto
 * - 处理 '`message`' 对象, 对其进行拦截注入到 '`messages`' 属性
 * - 二次处理不要赋值，尽量采用merge方式。 复制会被拦截及消息唯一性检测
 */
declare class Proto {
    private _message;
    private _systemMessage;
    messages: MessageObject[];
    systemMessages: MessageObject[];
    message: MessageObject;
    systemMessage: MessageObject;
}
export default Proto;
