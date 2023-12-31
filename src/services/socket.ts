import io, { Socket, connect } from 'socket.io-client';
import { socketURL } from '../config/api';

export class SocketService {
  static socket: null | Socket = null;

  static createConnection() {
    this.socket = io(socketURL);

    this.socket.on('connection', () => {
      console.log('Connection');
    });

    this.socket.on('disconnection', (err) => {
      console.log('Disconnection');
    });
  }
}
