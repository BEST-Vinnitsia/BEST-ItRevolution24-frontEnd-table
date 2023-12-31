import { useEffect, useState } from 'react';
import { SocketService } from '../services/socket';

export const useConnectSocket = () => {
  const [resData, setResData] = useState<string>('');

  const connectSocket = () => {
    SocketService.createConnection();

    SocketService.socket?.on('tableInfo', (data) => {
      setResData(JSON.stringify(data));
    });
   
    SocketService.socket?.on('newTableInfo', (data) => {
      setResData(JSON.stringify(data));
    });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return resData;
};
