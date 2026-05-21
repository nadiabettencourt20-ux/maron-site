import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = "",
  delay = 90,
  duration = 1.8,
  ease = "power3.out",
  splitType = "words",
  from = { opacity: 0, y: 45 },
  to = { opacity: 1, y: 0 },
  threshold = 0.25,
  rootMargin = "-80px",
  textAlign = "left",
  tag = "h2",
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      const el = ref.current;

      const split = new GSAPSplitText(el, {
        type: splitType,
        wordsClass: "split-word",
        charsClass: "split-char",
        linesClass: "split-line",
      });

      const targets =
        splitType === "chars"
          ? split.chars
          : splitType === "lines"
            ? split.lines
            : split.words;

      gsap.fromTo(targets, from, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: `top ${100 - threshold * 100}%${rootMargin}`,
          once: true,
        },
      });

      return () => {
        split.revert();
      };
    },
    {
      dependencies: [text, fontsLoaded],
      scope: ref,
    }
  );

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;