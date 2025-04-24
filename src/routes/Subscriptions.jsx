import styles from "./Subscriptions.module.css";
import { useState } from "react";
import QRCode from "react-qr-code";
import { QRCodeSVG } from "qrcode.react";
import logo from "../assets/matts-logo.png";

const subs = [
  { price: "$7.99", url: "https://buy.stripe.com/dR602abU9f50eaceUU" },
  { price: "$9.99", url: "https://buy.stripe.com/8wM8yG3nD0a6d68aEF" },
  { price: "$11.99", url: "https://buy.stripe.com/dR62ai3nD0a60jmeUW" },
  { price: "$14.99", url: "https://buy.stripe.com/3cs2ai4rH7Cyd689AD" },
];

const Subscriptions = () => {
  const [value, setValue] = useState({
    7.99: "https://buy.stripe.com/dR602abU9f50eaceUU",
    9.99: "https://buy.stripe.com/8wM8yG3nD0a6d68aEF",
    11.99: "https://buy.stripe.com/dR62ai3nD0a60jmeUW",
    14.99: "https://buy.stripe.com/3cs2ai4rH7Cyd689AD",
  });
  const [back, setBack] = useState();
  const [fore, setFore] = useState("#234167");
  const [size, setSize] = useState(500);

  return (
    <div className={styles.qrBlock}>
      {subs.map(({ price, url }) => (
        <div className={styles.qrItem} key={url}>
          <QRCodeSVG
            value={url}
            size={size}
            bgColor={back}
            fgColor={fore}
            title={price}
            imageSettings={{
              src: logo,
              height: 250,
              width: 250,
            }}
          />
          <h3>{price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
