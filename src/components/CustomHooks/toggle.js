import { useCallback, useState } from "react";

const useToggle = (initialValue) => {
  const [toggle, setState] = useState(initialValue || false);

  const setToggle = useCallback(() => {
    setState((val) => !val);
  }, []);

  return [toggle, setToggle];
};

export default useToggle;