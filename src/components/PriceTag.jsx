import styles from "../styles/PriceTags.module.css";
import Logo from "../assets/matts-logo.png";

const PriceTag = () => {
  return (
    <div className={styles.priceTagItem}>
      <div className={styles.logoBanner}>
        <img className={styles.logoImage} src={Logo} alt="matts-logo" />
      </div>
      <div className={styles.priceBox}>
        <div className={styles.dollaSign}>&#x24;</div>
      </div>
      <div className={styles.descBox}>
        <p>Description: </p>
        <div className={styles.linesBox}>
          <div className={styles.descLine}></div>
          <div className={styles.descLine}></div>
        </div>
      </div>
      <div className={styles.machineInfoBox}>
        <div className={styles.machInfoLine}>
          <p>Model No:</p>
          <div className={styles.descLine}></div>
        </div>
        <div className={styles.machInfoLine}>
          <p>Serial No:</p>
          <div className={styles.descLine}></div>
        </div>
      </div>
      <div className={styles.warrantyBox}>
        <p>30 Day Warranty</p>
        <p>"Ask about our Extended Warranty Program"</p>
      </div>

      <div className={styles.logoBanner}>
        <img className={styles.logoImage} src={Logo} alt="matts-logo" />
      </div>
    </div>
  );
};

export default PriceTag;
