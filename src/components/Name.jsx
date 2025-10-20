import { motion } from "framer-motion";
import { styles } from "./styles";
import TextPlugin from "gsap/TextPlugin";
import gsap from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

const Name = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current.innerText;
    textRef.current.innerText = '';

    gsap.to(textRef.current, {
      duration: text.length * 1,
      text: text,
      opacity:1,
      ease: 'slow',
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[40%] max-w-7xl mx-2 md:mx-20 ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-emerald-600' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-emerald-600 opacity-0' ref={textRef}>Maaz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100` } >
            I Am A Software Developer, worked <br className='sm:block hidden' />
            with API's, Design and Animations.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-40'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-4 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Name;
