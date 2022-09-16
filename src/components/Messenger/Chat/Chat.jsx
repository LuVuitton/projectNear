import { useParams } from "react-router-dom";

function Chat() {
let {chatId} = useParams()
console.log(chatId);

  return <>
  {chatId}
  </>;
}

export default Chat;
