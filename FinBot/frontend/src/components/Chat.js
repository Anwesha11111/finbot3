
import React, { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi, I am FinBot 👋 Ask me about finance!' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { sender: 'user', text: input };
    setMessages([...messages, userMsg]);

    const res = await axios.post('http://localhost:8000/chat', { message: input });
    setMessages(prev => [...prev, { sender: 'bot', text: res.data.reply }]);
    setInput('');
  };

  return (
    <div className="chat-container">
      {messages.map((m, i) => (
        <div key={i} className={m.sender}>{m.text}</div>
      ))}
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask about budgeting, investing, or saving…"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
