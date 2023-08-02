'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, planetVariants } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.innerWidth} ${styles.paddings} flex mx-auto lg:flex-row flex-col`}>
    <motion.div variants={planetVariants('left')} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <img src="/get-started.png" alt="get-started" className="lg:max-w-[650px] max-w-[450px] lg:max-h-[770px] max-h[450px] mx-auto" />
    </motion.div>
    <motion.div variants={slideIn('right', 'spring', 0.47, 1.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <TypingText title="| How Metaverus Works" />
      <TitleText title={<>Get started <br className="md:block hidden" /> with just a few <br className="md:block hidden" /> click</>} textStyles="leading-[70px]" />
      {startingFeatures.map((text, index) => (
        <div className="py-2 flex max-w-[400px]" key={index}>
          <div className="bg-[#323f59] z-0 font-semibold text-[18px] text-white rounded-[18px] flex items-center min-w-[70px] h-[70px] justify-center">
            <span className="text-white z-10">0{index + 1}</span>
          </div>
          <span className="text-secondary-white text-[18px] py-3 ml-[20px] leading-[30px]"> {text}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default GetStarted;
