import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [
  "Hello",
  "こんにちは",
  "வணக்கம்",
];

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [index, setIndex] = useState(0);
  const finished = useRef(false);

  useEffect(() => {
    if (finished.current) return;

    if (index >= greetings.length) {
      finished.current = true;

      const timeout = setTimeout(() => {
        onFinish();
      }, 500);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timeout);
  }, [index, onFinish]);

  return (
    <motion.div
      id="loader"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: index >= greetings.length ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {index < greetings.length && (
          <motion.h1
            key={greetings[index]}
            id="loader-text"
            className="text-4xl font-semibold tracking-wide"
            initial={{
              opacity: 0,
              y: 24,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            {greetings[index]}
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
