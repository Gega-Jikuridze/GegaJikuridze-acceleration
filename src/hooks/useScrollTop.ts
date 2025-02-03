import { useEffect, useState } from "react";

const useTopScroll = () => {
  const [scroller, setScroller] = useState<boolean>(false);

    const handleScrollTop = () => {
         window.scrollTo({top:0,behavior:"smooth"})
    }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) setScroller(true);
      else setScroller(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scroller, handleScrollTop };
};

export default useTopScroll;
