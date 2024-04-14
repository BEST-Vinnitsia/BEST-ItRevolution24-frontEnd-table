import { useEffect, useState } from 'react';
import { SocketService } from '../services/socket';

export const useConnectSocketGame = () => {
  const [resData, setResData] = useState<string>('');

  const connectSocket = () => {
    SocketService.createConnection();

    SocketService.socket?.on('tableGameInfo', (data) => {
      setResData(JSON.stringify(data));
    });
   
    SocketService.socket?.on('newTableGameInfo', (data) => {
      setResData(JSON.stringify(data));
    });
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return resData;
};
