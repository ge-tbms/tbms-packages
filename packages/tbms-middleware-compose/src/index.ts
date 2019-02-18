/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */
import { ICallback } from './global';

export default function compose(middleware: ICallback[]) {
  if (!Array.isArray(middleware))
    throw new TypeError("Middleware stack must be an array");

  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions!");
  }

  middleware.unshift((ctx:any, next:any) => {
    next();
    return ctx
  })

  /**
   * 中间件返回函数
   * @param {Array} middleware
   * @return {Function}
   *
   */
  return function(context: object, next?: Promise<any> | ICallback) {
    let index: number = -1;
    return dispatch(0);

    function dispatch(i: number): Promise<any> {
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn: any = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve(context);
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
