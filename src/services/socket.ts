import io, { Socket, connect } from 'socket.io-client';

export class SocketService {
  static socket: null | Socket = null;

  static createConnection() {
    const socketUrl = process.env.REACT_APP_SOCKET_URL;

    if (!socketUrl) {
      console.error('socket url is not found');
      return;
    }

    this.socket = io(socketUrl);

    this.socket.on('connection', () => {
      console.log('Connection');
    });

    this.socket.on('disconnection', (err) => {
      console.log('Disconnection');
    });
  }
}
