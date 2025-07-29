import React, { useState } from "react";
import axios from "axios";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const TemurbekAI: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const apiKey = "AIzaSyB5a9ZQSUfrTrp0cK6Pg5Y5uKawcr9NG5g"; // Replace with your Gemini API key

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [{ text: input }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": apiKey,
          },
        }
      );

      const aiText =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response from Temurbek AI";

      const aiMessage: Message = { sender: "ai", text: aiText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "❌ Error while contacting Temurbek AI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">🤖 Temurbek AI</h1>

      <div className="border rounded-lg p-4 bg-gray-100 h-[60vh] overflow-y-auto shadow-inner">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-4 py-2 rounded-xl max-w-[80%] break-words ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-500 italic">Temurbek AI is thinking...</p>}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TemurbekAI;
