'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div variants={fadeIn('right', 'spring', index * 0.5, 1)} className="flex md:flex-row flex-col mt-[30px] gap-4">
    <img src={imgUrl} alt="insight" className="rounded-[24px] w-[270px] h-[250px] object-cover" />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="text-white font-normal lg:text-[42px] text-[26px] text-left"> {title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white text-left"> {subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border-[2px] border-white cursor-pointer">
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
