// src/components/Chat.tsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import remarkGfm from "remark-gfm";
import { useChat } from "../hooks/useChat";
import UserInput from "./UserInput";
import { motion, AnimatePresence } from "framer-motion";

export default function Chat() {
  const [input, setInput] = useState("");
  const { output, loading, error, sendQuestion } = useChat();
  const [visible, setVisible] = useState(false);

  // 1) whenever output changes, hide immediately:
  useEffect(() => {
    if (output) setVisible(false);
  }, [output]);

  // 2) whenever we’ve just hidden, flash it back on next frame:
  useEffect(() => {
    if (!visible && output) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [visible, output]);

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
            <div className="flex justify-left">
            <span className="w-8 loading-dots inline-block text-2xl" />
            </div>
          ) : (
            <PaperAirplaneIcon className="w-8 h-8 text-blue-300" />
          )}
        </button>
      </div>

      <div>{error && <p className="text-red-600">{error.message}</p>}</div>

      <AnimatePresence mode="popLayout" initial={false}>
        {output && (
          <motion.div
            key={output}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="prose p-10"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{output}</ReactMarkdown>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
