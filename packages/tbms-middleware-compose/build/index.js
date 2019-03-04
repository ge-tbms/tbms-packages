export default function compose(middleware) {
    if (!Array.isArray(middleware))
        throw new TypeError("Middleware stack must be an array");
    for (const fn of middleware) {
        if (typeof fn !== "function")
            throw new TypeError("Middleware must be composed of functions!");
    }
    middleware.unshift((ctx, next) => {
        next();
        return ctx;
    });
    /**
     * 中间件返回函数
     * @param {Array} middleware
     * @return {Function}
     *
     */
    return function (context, next) {
        let index = -1;
        return dispatch(0);
        function dispatch(i) {
            if (i <= index)
                return Promise.reject(new Error("next() called multiple times"));
            index = i;
            let fn = middleware[i];
            if (i === middleware.length)
                fn = next;
            if (!fn)
                return Promise.resolve(context);
            try {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
    };
}
