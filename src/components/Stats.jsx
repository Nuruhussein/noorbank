import { stats } from "../constants";
import styles from "../style";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
const Stats = () => {

const ref =useRef(null);
const isInView=useInView(ref,{once:true});
const mainControls = useAnimation();

useEffect(()=>{
console.log(isInView);
if(isInView){
mainControls.start("visible");

}

},[isInView])


  return(

    
  <section className={`flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6 `}>
    {stats.map((stat,index) => (
      <motion.div
      ref={ref}
   variants={{
hidden: {opacity:0, },
visible: {opacity:1,}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.55,delay: index*0.5}}
    
      key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3 ${styles.transit}`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </section>
)}

export default Stats;
