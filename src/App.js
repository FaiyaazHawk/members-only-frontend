import React from "react";

import Message from "./components/Message";

function App() {
  const [messages, setMessages] = React.useState([])
  React.useEffect(()=> {
    fetch('http://localhost:5000/messages')
      .then((response)=> response.json())
      .then((data) => setMessages(data))
  }, [])

  const messageElements = messages.map((message) => {
    return <Message key={message._id} value={message}></Message>
  })

  return (
    <div className="App">
      <h1>Messages</h1>
      {messageElements}
    </div>
  );
}

export default App;


