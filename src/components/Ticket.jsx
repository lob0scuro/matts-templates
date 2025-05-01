import styles from "../styles/HoldTicket.module.css";
import logo from "../assets/matts-logo.png";

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <h1>HOLD</h1>
      <div className={styles.optionsBlock}>
        <p>SALE</p> | <p>SET</p> | <p>EXCHANGE</p>
      </div>
      <div className={styles.customerNumberBlock}>
        <p>CUSTOMER NAME:</p>
        <div className={styles.writeLine} />
      </div>
      <div className={styles.customerNumberBlock}>
        <p>PHONE NUMBER:</p>
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
      <div className={styles.holdLogoBox}>
        <img className={styles.holdLogo} src={logo} alt="matts-logo" />
      </div>
    </div>
  );
};

export default Ticket;
