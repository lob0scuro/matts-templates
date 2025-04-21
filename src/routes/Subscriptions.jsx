import React, { useState } from "react";
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
  const [size, setSize] = useState(340);

  return (
    <>
      <div className="headerText">
        <h1>Extended Warranty</h1>
        <p>Subscriptions</p>
      </div>
      <div className="qr-block">
        {subs.map(({ price, url }) => (
          <div className="qr-item" key={url}>
            <QRCodeSVG
              value={url}
              size={size}
              bgColor={back}
              fgColor={fore}
              title={price}
              imageSettings={{
                src: logo,
                height: 150,
                width: 150,
              }}
            />
            <h3>{price}</h3>
          </div>
        ))}
      </div>
      <div className="footerText">
        <p>Thanks for choosing Matt's Appliances</p>
        <p>We appreciate your business!</p>
      </div>
    </>
  );
};

export default Subscriptions;
