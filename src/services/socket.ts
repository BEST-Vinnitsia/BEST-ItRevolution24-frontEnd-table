import io, { Socket, connect } from 'socket.io-client';
import { socketURL } from '../config/api';
import { IUpdateTable } from '../types/table.type';

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

  //
  //
  //

  // updateTable(data: IUpdateTable[]) {
  //   this.socket.emit('updateTable', data);
  // }

  // newTableInfo() {
  //   return new Promise<any>((resolve, reject) => {
  //     this.socket.on('newTableInfo', (data) => {
  //       resolve(data);
  //     });
  //   });
  // }

  // tableInfo = () => {
  //   return new Promise<any>((resolve, reject) => {
  //     this.socket.on('tableInfo', (data) => {
  //       resolve(data);
  //     });
  //   });
  // };
}
