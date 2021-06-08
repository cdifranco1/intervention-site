import { useLocation } from "react-router-dom"
import { useEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function ScrollToBlogTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 600
    });
  }, [pathname]);

  return null;
}