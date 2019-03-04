export var SecenType;
(function (SecenType) {
    SecenType["p2p"] = "single";
    SecenType["team"] = "team";
})(SecenType || (SecenType = {}));
export var MessageType;
(function (MessageType) {
    MessageType["text"] = "text";
    MessageType["image"] = "image";
    MessageType["audio"] = "audio";
    MessageType["video"] = "video";
    MessageType["file"] = "file";
    MessageType["geo"] = "geo";
    MessageType["tip"] = "tip";
    MessageType["custom"] = "custom";
    MessageType["notification"] = "notification";
})(MessageType || (MessageType = {}));
export var FlowObject;
(function (FlowObject) {
    FlowObject["in"] = "in";
    FlowObject["out"] = "out";
})(FlowObject || (FlowObject = {}));
export var StatusObject;
(function (StatusObject) {
    StatusObject["sending"] = "sending";
    StatusObject["success"] = "success";
    StatusObject["fail"] = "fail";
})(StatusObject || (StatusObject = {}));
export var BC_MESSAGE_TYPE;
(function (BC_MESSAGE_TYPE) {
    BC_MESSAGE_TYPE[BC_MESSAGE_TYPE["text"] = 0] = "text";
    BC_MESSAGE_TYPE[BC_MESSAGE_TYPE["image"] = 1] = "image";
    BC_MESSAGE_TYPE[BC_MESSAGE_TYPE["voice"] = 2] = "voice";
})(BC_MESSAGE_TYPE || (BC_MESSAGE_TYPE = {}));
