import { useEffect } from "react";

function useCursor() {
  const addClass = () => {
    document.querySelectorAll(".trail").forEach((el) => {
      el.classList.add("trail-shrink");
    });
  };

  const removeClass = () => {
    document.querySelectorAll(".trail").forEach((el) => {
      el.classList.remove("trail-shrink");
    });
  };

  useEffect(() => {
    if (window.innerWidth > 900) {
      document.querySelectorAll("a").forEach((ele) => {
        ele.addEventListener("mouseover", addClass);

        ele.addEventListener("mouseout", removeClass);
      });

      return () => {
        document.querySelectorAll("a").forEach((ele) => {
          ele.removeEventListener("mouseover", addClass);

          ele.removeEventListener("mouseout", removeClass);
        });
      };
    }
  }, []);
}

export default useCursor;
