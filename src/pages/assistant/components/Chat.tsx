// src/components/Chat.tsx
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useChat } from "../hooks/useChat";

export default function Chat() {
  const [input, setInput] = useState("");
  const { output, loading, error, sendQuestion } = useChat();

  return (
    <div className="…">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything…"
      />

      <button onClick={() => sendQuestion(input)} disabled={loading}>
        {loading ? "…" : "Send"}
      </button>

      {error && <p className="text-red-600">{error.message}</p>}
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{output}</ReactMarkdown>
      </div>
    </div>
  );
}
