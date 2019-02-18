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
export default function compose(middleware: ICallback[]): (context: object, next?: ICallback | Promise<any> | undefined) => Promise<any>;
