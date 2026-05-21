import { motion } from "framer-motion";
import { useRef } from "react";

const Mouse3D = ({ children, className = "", intensity = 10 }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    element.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.025, 1.025, 1.025)
    `;
  };

  const handleLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
  };

  return (
    <motion.div
      ref={ref}
      className={`mouse-3d ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
};

export default Mouse3D;