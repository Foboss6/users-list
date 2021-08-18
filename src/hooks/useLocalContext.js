import { useRef } from "react"

const useLocalContext = (data) => {
  const ctx = useRef(data);
  ctx.current = data;
  return ctx;
};

export default useLocalContext;