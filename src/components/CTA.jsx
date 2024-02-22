import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={` flex  sm:flex-row flex-col ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow  `}>
  <div className={`flex-col flex-1 justify-center items-center`}>
<h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Let’s try our service now!</h2>
<p className={`max-w-[470px] mt-5 ${styles.paragraph} `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
  </div>
 <div className={``}>
    <Button />
  </div>


  </section>
);

export default CTA;
