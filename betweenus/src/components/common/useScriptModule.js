import { useEffect } from "react";

const useScriptModule = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.type = "module";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScriptModule;
