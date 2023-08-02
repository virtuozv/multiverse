'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <footer className={`${styles.paddings} relative`}>
    <motion.div variants={footerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col border-t-[2px] justify-between p-3 items-center`}>
      <h1 className="uppercase text-white lending-[30px] text-[24px] font-semibold">metaverus</h1>
      <h4 className="text-secondary-white text-[14px] text-center"> Copyright © 2021 - 2022 Metaversus. All rights reserved. </h4>
      <div className="flex gap-9">
        {socials.map((socialItem, index) => (
          <span key={index}>
            <img src={socialItem.url} alt={socialItem.name} className="w-[24px] h-[24px] object-contain cursor-pointer" />
          </span>
        ))}
      </div>
      <div className="footer-gradient" />
    </motion.div>
  </footer>
);

export default Footer;
