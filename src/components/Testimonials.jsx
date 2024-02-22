import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";


const Testimonials = () => {

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
  
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div 
      className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <motion.div  ref={ref}
   variants={{
hidden: {opacity:0, y: 200},
visible: {opacity:1, y: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </motion.div>

    <motion.div
    ref={ref}
   variants={{
hidden: {opacity:0, y: -200},
visible: {opacity:1, y: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}
    className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </motion.div>
  </section>
)}

export default Testimonials;
