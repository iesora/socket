"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const socket_io_2 = require("socket.io");
let ChatGateway = class ChatGateway {
    constructor() {
        this.logger = new common_1.Logger('AppGateway');
    }
    afterInit() {
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleConnection(client) {
        console.log('handleConnection');
        this.server.emit('msgToClient', 'connected');
    }
    async handleMessage(_, payload) {
        var _a;
        console.log('message', payload);
        payload.chatMessage.isSender = false;
        this.server
            .to((_a = payload.chatMessage.chatGroup) === null || _a === void 0 ? void 0 : _a.id.toString())
            .emit('msgToClient', payload);
    }
    async readMessage(_, data) {
        this.server.to(data.room).emit('readMessageClient', data.senderId);
    }
    joinRoom(client, room) {
        client.join(room);
    }
    leaveRoom(client, room) {
        if (client.rooms.has(room)) {
            client.leave(room);
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_2.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('readReport'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_2.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "readMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_2.Socket, String]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "joinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaveRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_2.Socket, String]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "leaveRoom", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)()
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map