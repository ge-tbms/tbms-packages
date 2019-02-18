"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("./event"));
exports.EventEmitter = event_1.default;
const log_1 = __importDefault(require("./log"));
exports.debug = log_1.default;
const _ = __importStar(require("./util"));
exports._ = _;
const middleware_1 = __importDefault(require("./middleware"));
exports.Middleware = middleware_1.default;
