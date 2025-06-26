// src/components/Chat.tsx
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { API_BASE } from "../../config";
console.log(API_BASE)
type Msg = { role: "user" | "assistant"; content: string };

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [lastQ, setLastQ]       = useState<string | null>(null);
  const [lastA, setLastA]       = useState<string | null>(null);
  const [output, setOutput]     = useState("");

  const sendQuestion = async () => {
    const q = question.trim();
    if (!q) return;

    const payload: any = { question: q };
    if (lastQ && lastA) {
      payload.last_question = lastQ;
      payload.last_answer   = lastA;
    }

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();           

      setLastQ(q);                            
      setLastA(data.answer);                  
      setOutput(data.answer);
      setQuestion("");
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <input
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Type your question…"
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
      <button
        onClick={sendQuestion}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Send
      </button>
      <div className="border border-gray-300 p-4 min-h-[4rem] prose prose-sm">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {output}
        </ReactMarkdown>
      </div>
    </div>
  );
}


