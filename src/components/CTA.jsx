import styles from "../style";
import Button from "./Button";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const CTA = () => {

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
  <motion.section 
  
  ref={ref}
   variants={{
hidden: {opacity:0, y: 120},
visible: {opacity:1, y: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.25,delay:0.25}}
  
  className={` flex  sm:flex-row flex-col ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow  `}>
  <motion.div 
  ref={ref}
   variants={{
hidden: {opacity:0, y: 200},
visible: {opacity:1, y: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.25,delay:0.5}}
  className={`flex-col flex-1 justify-center items-center`}>
<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Let’s try our service now!</h2>
<p className={`max-w-[470px] mt-5 ${styles.paragraph} `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
  </motion.div>
 <div className={``}>
    <Button />
  </div>


  </motion.section>
)}

export default CTA;
