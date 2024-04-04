import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = 0.2 * windowHeight; // 20% of window height(screen height)

      setIsVisible(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-10 right-10 bg-white py-2 px-2 rounded-full shadow-md ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      ⏫
    </button>
  );
};

export default ScrollToTopButton;
