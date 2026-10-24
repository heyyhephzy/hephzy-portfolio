"use client";

import { useEffect } from "react";

// Stops the browser restoring the old scroll position on reload, so the page always starts at the top.
export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return null;
}
