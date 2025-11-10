import { useMessageListener } from "./MessageListener";

export default function Animal() {

  const { message: currentAnimal } = useMessageListener();
  
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div>The current animal is:</div>
      <div className="text-2xl font-bold text-blue-400 mt-2">{currentAnimal}</div>
    </div>
  )
}