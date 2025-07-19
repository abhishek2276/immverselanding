'use client';
import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.mainfooter}>
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topRow}>
        <div className={styles.leftTop}>
          <h3>Start learning with 10k+ students around the world.</h3>
          <button className={styles.browseBtn}>Browse All Classes</button>
        </div>
        <div className={styles.rightTop}>
          <h2>100+</h2>
          <p>Master Classes</p>
        </div>
      </div>

      {/* Divider */}
      <hr className={styles.divider} />

      {/* Bottom Section */}
      <div className={styles.bottomRow}>
        {/* Left side */}
        <div className={styles.leftBottom}>
          <Image src="/footer/footerlogo.svg" alt="Logo" width={130} height={40} />
          <div className={styles.flags}>
  <div className={styles.flagItem}>
    <span>INDIA</span>
    <Image src="/footer/footer1.svg" alt="India" width={24} height={18} />
  </div>
  <div className={styles.flagItem}>
    <span>USA</span>
    <Image src="/footer/footer2.svg" alt="USA" width={24} height={18} />
  </div>
</div>

<div className={styles.socials}>
  <div className={styles.iconBox}>
    <Image src="/footer/footer3.svg" alt="email" width={18} height={18} />
  </div>
  <div className={styles.iconBox}>
    <Image src="/footer/footer4.svg" alt="linkedin" width={18} height={18} />
  </div>
  <div className={styles.iconBox}>
    <Image src="/footer/footer5.svg" alt="x" width={18} height={18} />
  </div>
  <div className={styles.iconBox}>
    <Image src="/footer/footer6.svg" alt="x" width={18} height={18} />
  </div>
  <div className={styles.iconBox}>
    <Image src="/footer/footer7.svg" alt="youtube" width={18} height={18} />
  </div>
</div>

        </div>

        {/* Right side: links */}
        <div className={styles.rightBottom}>
          <div className={styles.linkColumn}>
            <p>QUICK LINKS</p>
            <a href="#">Master Classes</a>
            <a href="#">Verify Credentials</a>
            <a href="#">Institute Registration</a>
          </div>
          <div className={styles.linkColumn}>
            <p>SUPPORT</p>
            <a href="#">FAQs</a>
            <a href="#">Refund Policy</a>
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className={styles.footerNote}>
        <p>
          © 2025 – Immverse AI. Disclaimer: Please note that the resources for video are AI-generated and meant for only educational purposes.
        </p>
        <span>V 0.11</span>
      </div>
    </footer>
    </div>
  );
}
