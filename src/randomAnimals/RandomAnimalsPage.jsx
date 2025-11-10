import { useState } from "react";
import Animal from "./Animal";

export default function RandomAnimals() {

  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnected(true);
  }

  return (
    <div className="h-full flex flex-col items-center justify-center gap-10">
      {connected ? (
        <Animal/>
      ) : (
        <>
          <div>Click the button to get random animals</div>
          <button className="mainBtn" onClick={handleConnect}>Get Animal</button>
        </>
      )}
    </div>
  )
}