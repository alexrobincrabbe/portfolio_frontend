// src/components/Chat.tsx
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import remarkGfm from "remark-gfm";

import { useChat } from "../hooks/useChat";
import useFadeInOnChange from "../hooks/useFadeInOnChange";

import UserInput from "./UserInput";


function Chat() {
  const [input, setInput] = useState("");
  const { output, loading, error, sendQuestion } = useChat();
  const visible = useFadeInOnChange(output);

  return (
    <>
      {/* User Input */}
      <div className="text-grey-500 flex justify-center items-center flex-col w-full">
        <div className="flex relative w-full">
          <UserInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                e.preventDefault();
                sendQuestion(input);
              }
            }}
            placeholder="Ask about Alex…"
            className="w-full"
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
              <PaperAirplaneIcon className="w-8 h-8 fill-[url(#iconGradient)]" />
            )}
          </button>
        </div>

        <div>{error && <p className="text-red-600">{error.message}</p>}</div>

        {/* AI Response */}
        <div className="
        w-full h-80
        mt-2 md:mt-10 p-5
        bg-background-dark shadow-sm shadow-blue-300   
        overflow-y-auto rounded-xl">
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
    </>
  );
}


export default Chat;