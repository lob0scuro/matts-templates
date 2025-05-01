import Ticket from "../components/Ticket";
import styles from "../styles/HoldTicket.module.css";

const HoldTicket = () => {
  return (
    <div className={styles.masterTicketBlock}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default HoldTicket;
