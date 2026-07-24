import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;

    root.classList.toggle("dark", dark);
    setIsDark(dark);

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#191510" : "#E8DCC4");
  };

  const toggleTheme = () => {
    const next = !isDark;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // View Transition API
    if (
      "startViewTransition" in document &&
      !prefersReducedMotion
    ) {
      (
        document as Document & {
          startViewTransition?: (callback: () => void) => void;
        }
      ).startViewTransition?.(() => applyTheme(next));
    } else {
      document.body.classList.add("theme-fade");
      applyTheme(next);

      window.setTimeout(() => {
        document.body.classList.remove("theme-fade");
      }, 400);
    }
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      className="theme-toggle press"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
    >
      <Sun className="icon-sun h-[18px] w-[18px]" />

      <Moon className="icon-moon h-[18px] w-[18px]" />
    </button>
  );
}
