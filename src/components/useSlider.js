import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

function useSlider(ref) {
  const [element, view] = useInView();

  const startInt = useRef();

  useEffect(() => {
    if (view) {
      let i = 0;

      startInt.current = setInterval(() => {
        i = i > 2 ? 0 : i;
        ref.current.style.marginLeft = `-${i * 100}%`;
        i++;
      }, 5000);
    } else {
      clearInterval(startInt.current);
    }
  }, [view, ref]);

  return [element];
}

export default useSlider;
