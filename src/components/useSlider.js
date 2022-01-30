import { useEffect, useState } from "react";

function useSlider(ref) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    ref.current.style.transform = `translateX(-${slide * 100}%)`;
  }, [ref, slide]);

  return [slide, setSlide];
}

export default useSlider;
