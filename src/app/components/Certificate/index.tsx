'use client';

import React from 'react';
import styles from './CertificatePreview.module.css';
import { FaDownload } from 'react-icons/fa';

const CertificatePreview = () => {
  const handleDownload = () => {
    alert('PDF download triggered (replace with actual logic)');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>⭐ Achievement Certificate</h2>
      <p className={styles.subtitle}>Download your personalized certificate</p>

      <div className={styles.certificateBox}>
        <h3 className={styles.previewTitle}>Certificate Preview</h3>
        <p className={styles.description}>
          This is to certify that <strong>Quiz Participant</strong> has successfully completed the Technology Quiz with a score of <strong>60%</strong>
        </p>
        <p className={styles.footer}>AI Challenge Quiz 2025</p>
      </div>

      <button className={styles.downloadButton} onClick={handleDownload}>
        <FaDownload className={styles.downloadIcon} />
        Download as PDF
      </button>
    </div>
  );
};

export default CertificatePreview;
