import React from "react";
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* === About Section === */}
        <div className={styles.section}>
          <h4 className={styles.heading}>About</h4>
          <p className={styles.text}>
            Welcome to <strong>Vipin’s Store</strong> — your one-stop shop for quality,
            comfort, and style. We bring the best products curated just for you.
          </p>
        </div>

        {/* === Quick Links === */}
        <div className={styles.section}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* === Contact === */}
        <div className={styles.section}>
          <h4 className={styles.heading}>Contact Us</h4>
          <p className={styles.text}>📧 support@appscrip.com</p>
          <p className={styles.text}>📞 +91 9876543210</p>
          <p className={styles.text}>📍 Lucknow, India</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} <span className={styles.name}>Vipin Madheshiya</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
