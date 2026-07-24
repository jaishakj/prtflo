import { useEffect, useState } from "react";

export default function useScrollSpy(
  sectionIds: string[],
  offset = 100
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentSection = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
