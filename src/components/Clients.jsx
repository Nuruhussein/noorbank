import { clients } from "../constants";
import styles from "../style";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
const Clients = () => {

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
  <section className={`  my-4`}>
    <div className={`flex justify-center items-center flex-wrap w-full `}>
      {clients.map((client,index) => (
        <motion.div
        
     ref={ref}
   variants={{
hidden: {opacity:0, y: 120},
visible: {opacity:1, y: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.25,delay:0.1*index}}
      
        key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </motion.div>
      ))}
    </div>
  </section>
)}

export default Clients;
