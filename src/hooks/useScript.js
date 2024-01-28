import { useEffect, useState } from "react";

const useScript = (scriptSrc, options = {}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = options.async || true;
    script.onload = () => {
      setReady(true);
      options.onLoad && options.onLoad();
    };
    script.onerror = options.onError || (() => { });

    document.body.appendChild(script);
  }, [scriptSrc, options]);

  return ready;
};

export default useScript;
