import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";


const FeatureCard = ({ icon, title, content, index }) => (




  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1  ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 ">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px] text-dimWhite mb-1">
        {content}
      </p>
    </div>
  </div>
);

// const FeatureCard = ({ icon, title, content, index }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
//       <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3">
//       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
//         {title}
//       </h4>
//       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

const Business = () =>  {
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
  <section ref={ref}
   variants={{
hidden: {opacity:0, y: 75},
visible: {opacity:1, y: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}
    
  
  id="features" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <motion.div
    ref={ref}
   variants={{
hidden: {opacity:0, x: -200},
visible: {opacity:1, x: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.75,delay:0.5}}
    
    className={`flex-1 flex justify-center items-start flex-col`}>
      <h2 className="  font-poppins font-semibold xs:text-[48px] text-[40px]  text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button style={`mt-10`} />
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
    className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
)}

export default Business;