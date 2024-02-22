import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter}  w-[140px]  h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter}  hover:animate-bounce  flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
   <div className=" flex justify-center items-center flex-row">
    <p className={`text-white text-gradient font-medium text-[18px] leading-[23.4px]`}>Get</p>
         <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />

   </div>
   <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
     <span className="text-gradient">Started</span>
   </p>
     
    </div>
  </div>
);

export default GetStarted;
