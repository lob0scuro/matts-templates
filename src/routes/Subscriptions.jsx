import styles from "../styles/Subscriptions.module.css";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../assets/matts-logo.png";

const subs = [
  [
    {
      price: "$7.99",
      url: "https://buy.stripe.com/dR602abU9f50eaceUU",
      location: "Lake Charles",
    },
    {
      price: "$9.99",
      url: "https://buy.stripe.com/8wM8yG3nD0a6d68aEF",
      location: "Lake Charles",
    },
    {
      price: "$11.99",
      url: "https://buy.stripe.com/dR62ai3nD0a60jmeUW",
      location: "Lake Charles",
    },
    {
      price: "$14.99",
      url: "https://buy.stripe.com/3cs2ai4rH7Cyd689AD",
      location: "Lake Charles",
    },
  ],
  [
    {
      price: "$7.99",
      url: "https://buy.stripe.com/aEU02a6zPf506HKaEN",
      location: "Jennings",
    },
    {
      price: "$9.99",
      url: "https://buy.stripe.com/00gaGO4rH1ea4zC3cm",
      location: "Jennings",
    },
    {
      price: "$11.99",
      url: "https://buy.stripe.com/14k02a3nD2iefeg5kv",
      location: "Jennings",
    },
    {
      price: "$14.99",
      url: "https://buy.stripe.com/6oEcOWcYd9KG5DGeV6",
      location: "Jennings",
    },
  ],
  [
    {
      price: "$95.88",
      url: "https://buy.stripe.com/7sI02a7DT5uq1nq8wM",
      location: "Jennings",
    },
    {
      price: "119.88",
      url: "https://buy.stripe.com/8wM2aiaQ57Cy2rudR7",
      location: "Jennings",
    },
    {
      price: "143.88",
      url: "https://buy.stripe.com/7sI2aigap3miaY06oD",
      location: "Jennings",
    },
    {
      price: "179.88",
      url: "https://buy.stripe.com/bIYbKS6zP0a64zC5kC",
      location: "Jennings",
    },
  ],
  [
    {
      price: "$95.88",
      url: "https://buy.stripe.com/aEU7uC8HX8GCeacdR9",
      location: "Lake Charles",
    },
    {
      price: "119.88",
      url: "https://buy.stripe.com/4gwcOW9M19KGd68eVe",
      location: "Lake Charles",
    },
    {
      price: "143.88",
      url: "https://buy.stripe.com/fZeg186zP6yuaY08wR",
      location: "Lake Charles",
    },
    {
      price: "179.88",
      url: "https://buy.stripe.com/7sI6qye2hbSO4zC7sO",
      location: "Lake Charles",
    },
  ],
];
const Subscriptions = () => {
  const fore = "#234167";
  const [locale, setLocale] = useState(0);

  return (
    <>
      <div className={styles.buttonBlock}>
        <button onClick={() => setLocale(0)}>Lake Charles Monthly</button>
        <button onClick={() => setLocale(1)}>Jennings Monthly</button>
        <button onClick={() => setLocale(3)}>Lake Charles Annual</button>
        <button onClick={() => setLocale(2)}>Jennings Annual</button>
      </div>
      <div className={styles.qrBlock}>
        <div className={styles.qrSingle}>
          <QRCodeSVG
            className={styles.qrItem}
            value={subs[locale][0].url}
            fgColor={fore}
            title={subs[locale][0].location + subs[locale][0].price}
            imageSettings={{ src: logo, height: 55, width: 55 }}
          />
          <div className={styles.qrSingleTextBlock}>
            <h1>{subs[locale][0].location}</h1>
            <h3>{subs[locale][0].price}</h3>
          </div>
        </div>
        <div className={styles.qrSingle}>
          <QRCodeSVG
            className={styles.qrItem}
            value={subs[locale][1].url}
            fgColor={fore}
            title={subs[locale][1].location + subs[locale][1].price}
            imageSettings={{ src: logo, height: 55, width: 55 }}
          />
          <div className={styles.qrSingleTextBlock}>
            <h1>{subs[locale][1].location}</h1>
            <h3>{subs[locale][1].price}</h3>
          </div>
        </div>
        <div className={styles.qrSingle}>
          <QRCodeSVG
            className={styles.qrItem}
            value={subs[locale][2].url}
            fgColor={fore}
            title={subs[locale][2].location + subs[locale][2].price}
            imageSettings={{ src: logo, height: 55, width: 55 }}
          />
          <div className={styles.qrSingleTextBlock}>
            <h1>{subs[locale][2].location}</h1>
            <h3>{subs[locale][2].price}</h3>
          </div>
        </div>
        <div className={styles.qrSingle}>
          <QRCodeSVG
            className={styles.qrItem}
            value={subs[locale][3].url}
            fgColor={fore}
            title={subs[locale][3].location + subs[locale][3].price}
            imageSettings={{ src: logo, height: 55, width: 55 }}
          />
          <div className={styles.qrSingleTextBlock}>
            <h1>{subs[locale][3].location}</h1>
            <h3>{subs[locale][3].price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
