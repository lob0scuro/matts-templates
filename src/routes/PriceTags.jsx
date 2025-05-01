import styles from "../styles/PriceTags.module.css";
import Logo from "../assets/matts-logo.png";
import PriceTag from "../components/PriceTag";

const PriceTags = () => {
  return (
    <div className={styles.priceTagContainer}>
      <PriceTag />
      <PriceTag />
    </div>
  );
};

export default PriceTags;
