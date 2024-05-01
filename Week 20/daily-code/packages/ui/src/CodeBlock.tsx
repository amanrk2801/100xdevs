import React, { useEffect } from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import styles from "../app/CodeBlock.module.css";
import "highlight.js/styles/github-dark.css";

export default function CodeBlock({ block }: { block: any }) {
  const code: string = block.properties.title[0].toString();
  hljs.registerLanguage("javascript", javascript);
  console.log(block);
  const copied_display_id = `copied_display_${block.id}`;

  useEffect(() => {
    hljs.highlightAll();
    const copiedDisplayElement = document.getElementById(copied_display_id);
    if (copiedDisplayElement) {
      copiedDisplayElement.style.display = "none"; // Hide copied display element on mount
    }
  }, [copied_display_id]);

  return (
    <div className="max-w-full overflow-auto">
      <pre className={`${styles.code_block} px-4 sm:px-6 md:px-8 relative`}>
        <code className="language-javascript">{code}</code>
        <div className={`${styles.copy_block} absolute top-0 right-0`}>
          <button
            className={styles.copy_button}
            onClick={() => {
              navigator.clipboard.writeText(code).then(() => {
                const copiedDisplayElement = document.getElementById(
                  copied_display_id
                );
                if (copiedDisplayElement) {
                  copiedDisplayElement.style.display = "block";
                  setTimeout(() => {
                    copiedDisplayElement.style.display = "none";
                  }, 1000);
                }
              });
            }}
          >
            Copy
          </button>
          <div id={copied_display_id} className={styles.copied_text}>
            Copied!!
          </div>
        </div>
      </pre>
    </div>
  );
}
