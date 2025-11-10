import { useState, useEffect } from "react";


// const SOCKET_URL = "wss://rickyzero-backend.vercel.app:8080/";
const SOCKET_URL = "ws://localhost:8080/";

export function useMessageListener() {

  const [msg, setMsg] = useState(null);

  // Establish WebSocket connection on component mount
  const [webSocket, setWebSocket] = useState(null);
  useEffect(() => {
    const ws = new WebSocket(SOCKET_URL);
    ws.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setMsg(event.data);
    }
    ws.onerror = (error) => {
      alert('WebSocket error occurred, please try again later.');
      console.error('WebSocket error:', error);
    }
    setWebSocket(ws);

    // Close connection when component unmount
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  
  return { message: msg };
}