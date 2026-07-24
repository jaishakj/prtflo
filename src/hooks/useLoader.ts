import { useEffect, useState } from "react";

const greetings = [
  "Hello",
  "नमस्ते",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Bonjour",
  "Hola",
  "Olá",
  "مرحبًا",
  "Привет",
  "வணக்கம்",
];

export default function useLoader() {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let index = 0;

    const interval = window.setInterval(() => {
      index++;

      if (index >= greetings.length) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 400);

        return;
      }

      setCurrentGreeting(greetings[index]);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return {
    loading,
    currentGreeting,
  };
}
