"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleCategory = exports.AnswerType = exports.UserListType = exports.EventType = exports.ChatMessageType = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["VISITOR"] = "visitor";
    UserRole["CLERK"] = "clerk";
    UserRole["CLERK_MANAGEMENT"] = "clerk_management";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var ChatMessageType;
(function (ChatMessageType) {
    ChatMessageType["VIDEO"] = "video_url";
    ChatMessageType["IMAGE"] = "image_url";
    ChatMessageType["TEXT"] = "text";
    ChatMessageType["SYSTEM_TEXT"] = "system";
    ChatMessageType["PDF"] = "pdf";
    ChatMessageType["OTHERS"] = "others";
})(ChatMessageType = exports.ChatMessageType || (exports.ChatMessageType = {}));
var EventType;
(function (EventType) {
    EventType["NORTH_JAPAN"] = "North Japan";
    EventType["TOKYO_CENTRAL"] = "Tokyo Central";
    EventType["TOKYO_WEST"] = "Tokyo West";
    EventType["NAGOYA"] = "Nagoya";
    EventType["OSAKA"] = "Osaka";
    EventType["KYOTO"] = "kyoto";
    EventType["SETOUCHI"] = "Setouchi";
    EventType["FUKUOKA"] = "Fukuoka";
    EventType["TOKYO_PLATINUM"] = "Tokyo Platinum";
})(EventType = exports.EventType || (exports.EventType = {}));
var UserListType;
(function (UserListType) {
    UserListType["NORTH_JAPAN"] = "North Japan";
    UserListType["TOKYO_CENTRAL"] = "Tokyo Central";
    UserListType["TOKYO_WEST"] = "Tokyo West";
    UserListType["NAGOYA"] = "Nagoya";
    UserListType["OSAKA"] = "Osaka";
    UserListType["KYOTO"] = "Kyoto";
    UserListType["SETOUCHI"] = "Setouchi";
    UserListType["FUKUOKA"] = "Fukuoka";
    UserListType["TOKYO_PLATINUM"] = "Tokyo Platinum";
    UserListType["ALL"] = "All";
    UserListType["HOKKAIDO"] = "Hokkaido";
    UserListType["HOKURIKU"] = "Hokuriku";
    UserListType["OKINAWA"] = "Okinawa";
    UserListType["JKBC"] = "JKBC";
    UserListType["AllJAPAN"] = "All Japan";
})(UserListType = exports.UserListType || (exports.UserListType = {}));
var AnswerType;
(function (AnswerType) {
    AnswerType["ATTENDANCE"] = "attendance";
    AnswerType["ABSENCE"] = "absence";
    AnswerType["ONHOLD"] = "on_hold";
})(AnswerType = exports.AnswerType || (exports.AnswerType = {}));
var RuleCategory;
(function (RuleCategory) {
    RuleCategory["PHILOSOPHY"] = "philosophy";
    RuleCategory["RULES"] = "rules";
    RuleCategory["ABC"] = "abc";
    RuleCategory["BENEFITS"] = "benefits";
    RuleCategory["DOCUMENT"] = "document";
    RuleCategory["OTHERS"] = "";
})(RuleCategory = exports.RuleCategory || (exports.RuleCategory = {}));
//# sourceMappingURL=types.js.map