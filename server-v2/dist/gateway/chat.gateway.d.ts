import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Socket } from 'socket.io';
import { Message } from 'src/types';
declare type socketMessage = {
    chatMessage: Message;
    type: 'send' | 'edit' | 'delete';
};
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private logger;
    afterInit(): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket): void;
    handleMessage(_: Socket, payload: socketMessage): Promise<void>;
    readMessage(_: Socket, data: {
        room: string;
        senderId: string;
    }): Promise<void>;
    joinRoom(client: Socket, room: string): void;
    leaveRoom(client: Socket, room: string): void;
}
export {};
