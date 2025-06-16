import { useState, useCallback } from "react";

export const useToggle = (initial = false) => {
  const [open, setOpen] = useState(initial);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return { open, toggle, setOpen };
};
