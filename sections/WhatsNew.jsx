'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, planetVariants } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.innerWidth} ${styles.paddings} flex mx-auto lg:flex-row flex-col`}>
    <motion.div variants={slideIn('left', 'spring', 0.47, 1.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <TypingText title="| What's new" />
      <TitleText title={<>What's new about <br className="md:block hidden" /> Metaversus </>} textStyles="leading-[70px]" />
      <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
        {newFeatures.map((feature) => (
          <NewFeatures {...feature} key={feature.title} />
        ))}
      </div>
    </motion.div>
    <motion.div variants={planetVariants('right')} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <img src="/whats-new.png" alt="whats-new" className="lg:max-w-[550px] max-w-[450px] lg:max-h-[670px] max-h[450px] mx-auto" />
    </motion.div>
  </section>
);

export default WhatsNew;
