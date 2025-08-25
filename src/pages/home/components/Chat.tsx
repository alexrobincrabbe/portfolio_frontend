// src/components/Chat.tsx
import { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { ReactTyped } from "react-typed";

import { useChat } from "../hooks/useChat";
import useFadeInOnChange from "../hooks/useFadeInOnChange";
import UserInput from "./UserInput";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

function Chat() {
  const [input, setInput] = useState("");
  const { output, loading, error, sendQuestion } = useChat();
  const visible = useFadeInOnChange(output);
  const [done, setDone] = useState(false);

  const schema = {
    ...defaultSchema,
    tagNames: [
      ...(defaultSchema.tagNames || []),
      "span", // allow inline spans
    ],
    attributes: {
      ...defaultSchema.attributes,
      span: [
        ...(defaultSchema.attributes?.span || []),
        ["className"], // allow class on spans
      ],
    },
    // (Optional) extra safety: restrict class names to your palette
    clobberPrefix: "", // keep anchors as-is
  };

  const stripMarkdown = (md: string) =>
    md
      // remove images entirely
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
      // replace links with just the link text
      .replace(/\[([^\]]*)\]\([^)]+\)/g, "$1")
      // remove markdown symbols (* _ ` # > ~ -)
      .replace(/[*_`>#~\-]/g, "")
      // remove raw HTML tags like <span>, <div>, <br>, etc.
      .replace(/<[^>]+>/g, "")
      // collapse multiple line breaks
      .replace(/\n{2,}/g, "\n")
      .trim();

  const plain = useMemo(() => stripMarkdown(output).trim(), [output]);
  useEffect(() => {
    if (output) {
      setDone(false);
    }
  }, [output]);
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
        <div
          className="
        w-full h-80
        mt-2 md:mt-10 p-5
        bg-background-dark shadow-sm shadow-blue-300   
        overflow-y-auto rounded-xl"
        >
          {output && visible && !done && (
            <ReactTyped
              strings={[plain]}
              typeSpeed={5}
              loop={false}
              showCursor={false}
              cursorChar="|"
              onComplete={() => setDone(true)}
            />
          )}
          {output && visible && done && (
            <div className="prose prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
              >
                {output}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;
