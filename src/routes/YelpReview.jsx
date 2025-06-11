import styles from "../styles/YelpReview.module.css";
import { QRCodeSVG } from "qrcode.react";

const YelpReview = () => {
  const URLS = [
    {
      location: "Lake Charles",
      url: "https://www.yelp.com/writeareview/biz/YP_Q6MTQzKlwwnXvc5n8lg?return_url=%2Fbiz%2FYP_Q6MTQzKlwwnXvc5n8lg&review_origin=biz-details-war-button",
    },
    {
      location: "Jennings",
      url: "https://www.yelp.com/writeareview/biz/Np6BgtRmvYtPqzJjlTryhA?return_url=%2Fbiz%2FNp6BgtRmvYtPqzJjlTryhA&review_origin=biz-details-war-button",
    },
  ];
  return (
    <div className={styles.yelpQRBlock}>
      {URLS.map(({ location, url }) => (
        <div className={styles.yelpQR}>
          <QRCodeSVG
            value={url}
            title={location}
            fgColor="#234167"
            className={styles.yelp}
          />
          <h5>
            Leave our {location} location <br /> a review on Yelp!
          </h5>
        </div>
      ))}
    </div>
  );
};

export default YelpReview;
