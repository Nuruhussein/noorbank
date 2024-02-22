import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
const CardDeal = () => {

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
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <motion.div
    
     ref={ref}
   variants={{
hidden: {opacity:0, x: -200},
visible: {opacity:1, x: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}
      
      className={ `flex  flex-col  justify-center items-start`}>
      <h2 className=" mb-6 xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] font-poppins font-semibold">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`xs:text-[18px] text-[10px] text-slate-300 xs:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-[470px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button style={`mt-10 `} />
    </motion.div>

    <motion.div
     ref={ref}
   variants={{
hidden: {opacity:0, y: 200},
visible: {opacity:1, y: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}
      
      className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
      <img src={card} alt="billing" className="sm:w-[85%] w-[100%] h-[100%]" />
    </motion.div>
  </section>
)}
export default CardDeal;
