import { useEffect, useState } from "react";
import { LiaArrowUpSolid } from "react-icons/lia";

export default function GoToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`fixed bottom-6 right-6 cursor-pointer z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#1368b4] text-white text-xl shadow-xl transition-all duration-300
        ${
          show
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        }
        hover:scale-110`}
    >
      <LiaArrowUpSolid size={24} />
    </button>
  );
}
