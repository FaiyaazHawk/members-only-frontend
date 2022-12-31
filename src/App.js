import React from "react";

function App() {
  const [messages, setMessages] = React.useState([])
  React.useEffect(()=> {
    fetch('http://localhost:5000/')
      .then((response)=> response.json())
      .then((data) => setMessages(data))
  })
  console.log(messages)
  return (
    <div className="App">
      <h1>Messages</h1>
      {messages.map((message) => {
       return <h2>{message}</h2>
      }) }
    </div>
  );
}

export default App;


