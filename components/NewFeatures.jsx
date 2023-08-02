import styles from '../styles';

const NewFeatures = ({ subtitle, title, imgUrl }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} bg-[#323f5d] rounded-[24px] w-[70px] h-[70px]`}>
      <img src={imgUrl} alt={title} className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="text-white font-bold leading-[30px] text-[24px] mt-[26px] ">{title}</h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
