import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`  my-4`}>
    <div className={`flex justify-center items-center flex-wrap w-full `}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
