import { useState } from "react";
import { useEffect } from "react";

function useScroll() {
  const [scroll, setScroll] = useState();

  useEffect(() => {
    setScroll(window.scrollX);
    console.log(window.scrollX,"bu hook ichidigi");
  }, [window.scrollX]);

  return [scroll];
}
export default useScroll;
