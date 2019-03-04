/**
 * 日志函数
 * @param {String} app  应用名称
 *
 * @example
 *
 * const debug = require('debug')('tbms')
 *
 * ```javascript
 * debug.log('logTest');
 * // [tbms:0] log ===> logTest
 * debug.error('errorTest');
 * // [tbms:0] error ===> errorTest
 * debug.warn('warn');
 * // [tbms:0] warn ===> warnTest
 * ```
 */
const ConsoleConfig = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "countReset", "assert", "profile", "profileEnd", "time", "timeLog", "timeEnd", "timeStamp", "context", "memory"];
export default function debug(app, env = 'prod') {
    let _console = {};
    const config = [{
            type: 'log',
            color: '#2196f3'
        }, {
            type: 'warn',
            color: '#ff9800'
        }, {
            type: 'error',
            color: '#f44336'
        }];
    let number = 0;
    if (env === 'prod') {
        ConsoleConfig.forEach(type => {
            _console[type] = () => { };
        });
    }
    else {
        _console = Object.create(console);
        config.forEach(item => {
            _console[item.type] = _console[item.type].bind(null, `%c[${app}] ${item.type} ===>`, `color: ${item.color}`);
        });
    }
    return _console;
}
