// src/components/Chat.tsx
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import remarkGfm from "remark-gfm";
import { useChat } from "../hooks/useChat";
import UserInput from "./UserInput";

export default function Chat() {
  const [input, setInput] = useState("");
  const { output, loading, error, sendQuestion } = useChat();

  return (
    <div className="text-blue-500 flex justify-center items-center flex-col">
      <div className="flex">
        <UserInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything…"
        />

        <button onClick={() => sendQuestion(input)} disabled={loading}>
          {loading ? (
            "…"
          ) : (
            <PaperAirplaneIcon className="w-8 h-8 text-blue-300" />
          )}
        </button>
      </div>

      <div>{error && <p className="text-red-600">{error.message}</p>}</div>

      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{output}</ReactMarkdown>
      </div>
    </div>
  );
}
