import styles from "../styles/Flyers.module.css";
import logo from "../assets/matts-logo.png";

const Flyer = () => {
  return (
    <div className={styles.flyer}>
      <h1>
        PROTECT YOUR <br /> PURCHASE
      </h1>
      <div className={styles.flyerHead}>
        <p>ASK ABOUT OUR</p>
        <p>
          LIFETIME <br />
          EXTENDED <br />
          WARRANTY
        </p>
      </div>
      <div className={styles.flyerLifeTimeCoverage}>
        <p>
          Lifetime coverage for
          <br />
          appliaces you buy from us.
        </p>
      </div>
      <div className={styles.flyerCoverage}>
        <p>Starting at $7 a month</p>
      </div>
      <div className={styles.logoFooter}>
        <img className={styles.flyerLogo} src={logo} alt="matts logo" />
      </div>
    </div>
  );
};

export default Flyer;
