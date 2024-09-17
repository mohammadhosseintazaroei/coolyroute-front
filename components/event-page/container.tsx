// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Container() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex flex-col gap-[200px]">
      {[1, 2, 3, 4, 5].map((image) => (
        <div>
          dfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsd
          dfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsd
          dfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsd
          dfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsd
          dfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsd
          dfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsd
          dfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsddfadsfsdafsdfsdfadsfsdfsdafsdfsdsd
        
        
        
        
        
        
        
        </div>
      ))}
      <motion.div style={{ scaleX }} />
    </div>
  );
}
