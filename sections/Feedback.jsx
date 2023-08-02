'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn, slideIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} mt-[80px]`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className={`${styles.innerWidth} gap-10 mx-auto flex lg:flex-row flex-col`}>
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative text-white">
        <div className="flex flex-col gap-3">
          <h1 className="text-[32px] font-semibold">Samantha</h1>
          <h4 className="text-[18px]">Founder Metaverus</h4>
          <p className="mt-[15px] text-[24px] leading-[45px]">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
        </div>
        <div className="feedback-gradient" />
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="relative flex-1 flex justify-center items-center">
        <img src="planet-09.png" alt="planet9" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div variants={zoomIn(0.4, 1)} className="lg:block hidden absolute cursor-pointer -left-[10%] top-[3%]">
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
    <motion.div variants={slideIn('left', 'spring', 0.47, 1.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className={`${styles.innerWidth} mx-auto justify-between mt-[8vh] flex sm:flex-row flex-col items-center`}>
      <h1 className="text-[64px] text-white font-semibold sm: text-center">Enter the Metaverse</h1>
      <div className="bg-[#25618B] py-4 h-[64px] px-6 rounded-[34px] uppercase hover:bg-[#3878ee] cursor-pointer flex items-center">
        <img src="/headset.svg" alt="headset" className="object-contain mr-[10px]" />
        <div className="text-[16px] text-white flex items-center flex-nowrap w-[150px] h-[12px]">enter metaverse</div>
      </div>
    </motion.div>
  </section>
);

export default Feedback;
