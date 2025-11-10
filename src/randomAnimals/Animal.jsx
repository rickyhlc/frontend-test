import useWebSocket, { ReadyState } from 'react-use-websocket';

const SOCKET_URL = "wss://rickyzero.vercel.app:8080";

export default function Animal() {

  const { lastMessage } = useWebSocket(SOCKET_URL);
  

  return (
    <div className="h-full flex items-center justify-center">
      <div>Current animal is</div>
      <div className="text-lg bold text-blue-400">{lastMessage}</div>
    </div>
  )
}