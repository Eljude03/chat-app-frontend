// src/App.js
import React, { useState, useEffect } from "react";
import { msalInstance } from "./authConfig";
import { sendMessage } from "./webPubSubClient";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    msalInstance.handleRedirectPromise().then((response) => {
      if (response) {
        msalInstance.setActiveAccount(response.account);
      }
    });
  }, []);

  const handleSend = () => {
    sendMessage(message);
    setChat([...chat, message]);
    setMessage("");
  };

  return (
    <div>
      <h1>Real-Time Chat</h1>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
