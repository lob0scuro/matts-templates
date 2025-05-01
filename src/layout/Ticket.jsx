import styles from "../styles/HoldTicket.module.css";

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <h1>HOLD</h1>
      <div className={styles.optionsBlock}>
        <p>SALE</p> | <p>SET</p> | <p>EXCHANGE</p>
      </div>
      <div className={styles.customerNumberBlock}>
        <p>CUSTOMER NAME</p>
        <div className={styles.writeLine} />
      </div>
      <div className={styles.customerNumberBlock}>
        <p>CUSTOMER NUMBER</p>
        <div className={styles.writeLine} />
      </div>
      <div className={styles.notesBlock}>
        <p>NOTES</p>
        <div className={styles.writeLine} />
        <div className={styles.writeLine} />
        <div className={styles.writeLine} />
        <div className={styles.writeLine} />
      </div>
      <div className={styles.ticketFooter}>
        <div className={styles.footerInitials}>
          <p>INITIALS</p>
          <div className={styles.writeLine} />
        </div>
        <div className={styles.footerDate}>
          <p>DATE</p>
          <div className={styles.writeLine} />
        </div>
        <div className={styles.footerTime}>
          <p>TIME</p>
          <div className={styles.writeLine} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
