'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';

import { TypingText, TitleText, InsightCard } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.innerWidth} ${styles.paddings} relative mx-auto text-center`} id="insight">
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <TypingText title="| Insight" />
      <TitleText title="Insight about metaverse" textStyles="leading-[70px]" />
      {insights.map((insight, index) => (
        <InsightCard {...insight} key={`insight-${index}`} index={index + 1} />
      ))}
    </motion.div>
  </section>
);

export default Insights;
