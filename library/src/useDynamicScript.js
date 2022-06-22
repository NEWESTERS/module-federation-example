import { useEffect, useState } from "react";

function useDynamicScript(url) {
  const [state, setState] = useState("idle");

  useEffect(() => {
    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;
    element.onload = () => {
      setState("success");
    };
    element.onerror = () => {
      setState("error");
    };

    document.head.appendChild(element);

    setState("loading");

    return () => {
      element.remove();
    };
  }, [url]);

  return state;
}

export default useDynamicScript;
