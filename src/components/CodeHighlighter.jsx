"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa6";

const CodeHighlighter = ({ codeString }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-2 bg-[#1e1e1e] text-white px-2 py-1 text-sm rounded hover:bg-[#333] transition flex items-center gap-1 z-10"
      >
        {copied ? (
          <>
            <FaCheck className="w-4 h-4" /> Copied
          </>
        ) : (
          <>
            <FaCopy className="w-4 h-4" /> Copy
          </>
        )}
      </button>

      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        wrapLines
        showLineNumbers
        wrapLongLines
        customStyle={{
          borderRadius: "0.5rem",
          paddingTop: "2.5rem",
          background: "#1e1e1e",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
