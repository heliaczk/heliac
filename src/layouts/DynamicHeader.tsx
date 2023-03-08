import { useEffect, useState } from "react";
import Header from "./Header";

export default function DynamicHeader(): JSX.Element {
  const [headerIsVisible, setHeaderIsVisible] = useState(false);
  useEffect(() => {
    const adjustVisibility = () => {
      setHeaderIsVisible(window.pageYOffset > screen.height / 2.5);
    };

    adjustVisibility();
    addEventListener("scroll", adjustVisibility);

    return () => removeEventListener("scroll", adjustVisibility);
  }, []);

  if (!headerIsVisible) {
    return <></>;
  }

  return <Header />;
}
