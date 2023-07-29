import { useEffect } from "react";
import { useState } from "react";

function useScroll() {
  const [scrollNumber, setScrollNumber] = useState()
  
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const scroll = document.documentElement.scrollTop;
    setScrollNumber(scroll);
  }

  useEffect(() => {
    myFunction();
  }, [scrollNumber]);

  return [scrollNumber];
}
export default useScroll;
