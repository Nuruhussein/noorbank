import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={ `flex  flex-col  justify-center items-start`}>
      <h2 className=" mb-6 xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] font-poppins font-semibold">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`xs:text-[18px] text-[10px] text-slate-300 xs:leading-[36.8px] leading-[30.8px] font-poppins font-normal max-w-[470px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button style={`mt-10 `} />
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
      <img src={card} alt="billing" className="sm:w-[85%] w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
