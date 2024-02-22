import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import {motion,useInView,useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Footer = () => {

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
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
     className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <motion.div
      ref={ref}
   variants={{
hidden: {opacity:0, x:-200},
visible: {opacity:1, x: 0}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.25,delay:0.5}}
      className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </motion.div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <motion.li
                ref={ref}
   variants={{
hidden: {opacity:0},
visible: {opacity:1}
        }}
      
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.25,delay:0.35*index}}
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (




          <img


            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
)}

export default Footer;
