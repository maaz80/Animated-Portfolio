import { styles } from "./styles";
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Tech = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current.innerText;
    textRef.current.innerText = '';

    gsap.to(textRef.current, {
      duration: text.length * 0.1,
      text: text,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div className=''>
      <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      <p className={`${styles.sectionSubText} mb-20`} ref={textRef}>Move icons with mouse.</p>
      <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-10">
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
