'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

import { TypingText, TitleText } from '../components';

const World = () => (
  <section className={`${styles.innerWidth} ${styles.paddings} flex mx-auto lg:flex-row flex-col text-center`}>
    <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} initial="hidden" whileInView="show">
      <TypingText title="| People on the World" />
      <TitleText title={<>Track friends around you and <br className="md:block hidden" /> invite them to play together in <br className="md:block hidden" /> the same world</>} textStyles="leading-[70px]" />

      <motion.div variant={fadeIn('up', 'tween', 0.3, 1)} initial="hidden" whileInView="show" className="relative mt-[68px] flex w-full h-[550px]">
        <img src="map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people2" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people3" className="w-full h-full" />
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
