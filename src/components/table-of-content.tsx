import { useEffect, useState } from "react";
import { useHeadsObserver } from "@/hooks/useHeadsObserver";

interface Heading {
  id: string;
  text: string;
  level: number;
}

const getClassName = (level: number) => {
  switch (level) {
    case 2:
      return "head2";
    case 3:
      return "head3";
    case 4:
      return "head4";
    default:
      return "";
  }
};

export const TableOfContent = () => {
  const { activeId } = useHeadsObserver();
  const [headings, setHeadings] = useState<Heading[]>([]); // Specify type for headings state

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4")).map(
      (elem) => ({
        id: elem.id,
        text: (elem as HTMLElement).innerText,
        level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
  }, []);

  return (
    <div className="hidden lg:block sticky top-4 h-min text-[#a6a6a6]">
      <p className="font-bold text-xl mb-4">Table of Contents</p>
      <ul className="flex flex-col gap-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.text} className={getClassName(heading.level)}>
            <a
              href={`#${heading.id}`}
              className={`${
                activeId === heading.id
                  ? "font-bold text-[#c7c7c7]"
                  : "font-normal"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelectorAll(`#${heading.id}`)[0].scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
