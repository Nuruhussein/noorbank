import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Billing = () => {


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
  <section id="product" className={layout.sectionReverse}>
    <motion.div 
    ref={ref}
   variants={{
hidden: {opacity:0, x: -200},
visible: {opacity:1, x: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}
    
    className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[60%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[80%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div 
    ref={ref}
   variants={{
hidden: {opacity:0, x: 200},
visible: {opacity:1, x: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}

    className={`${layout.sectionInfo} ml-10`}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className={`flex flex-row flex-wrap sm:mt-10 mt-6  mr-[130px] `}>
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-10 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] sm:mt-0 mt-6 object-contain cursor-pointer" />
      </div>
    </motion.div>
  </section>
)}

export default Billing
