// src/components/Chat.tsx
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import remarkGfm from "remark-gfm";
import { useChat } from "../hooks/useChat";
import useFadeInOnChange from "../hooks/useFadeInOnChange";
import UserInput from "./UserInput";

export default function Chat() {
  const [input, setInput] = useState("");
  const { output, loading, error, sendQuestion } = useChat();
  const visible = useFadeInOnChange(output);

  return (
    <div className="text-blue-500 flex justify-center items-center flex-col">
      <div className="flex relative">
        <UserInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything…"
          className="w-72"
        />

        <button
          className="absolute right-[-25px]"
          onClick={() => sendQuestion(input)}
          disabled={loading}
        >
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
      <div className="border border-2 w-72 mt-10 h-80 p-5 overflow-y-auto">
        <AnimatePresence mode="popLayout" initial={false}>
          {output && visible && (
            <motion.div
              key={output}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="prose"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {output}
              </ReactMarkdown>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
