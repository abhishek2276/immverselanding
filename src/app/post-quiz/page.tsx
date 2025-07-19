'use client';
import React from 'react';
import styles from './page.module.css';
import Header from '../components/header';
import DifficultyChart from '../components/DifficultyChart';
import CertificatePreview from '../components/Certificate';
import Leaderboard from '../components/LeaderBoard';

export default function Page() {
  const leaderboardData = [
    { rank: 40, name: 'You', time: '0:38', score: 60, isYou: true },
    { rank: 1, name: 'Alex Chen', time: '12:45', score: 95 },
    { rank: 2, name: 'Sarah Johnson', time: '13:20', score: 92 },
    { rank: 3, name: 'Mike Rodriguez', time: '11:30', score: 88 },
    { rank: 4, name: 'Scarlet Jones', time: '12:14', score: 87 },
    { rank: 5, name: 'Emma Davis', time: '14:10', score: 85 },
    { rank: 6, name: 'James Lee', time: '18:00', score: 91 },
    { rank: 7, name: 'Sophia Turner', time: '10:30', score: 78 },
    { rank: 8, name: 'Mia Johnson', time: '12:45', score: 82 },
    { rank: 9, name: 'Liam Smith', time: '16:20', score: 89 },
    { rank: 10, name: 'Noah Brown', time: '20:15', score: 95 },
  ];

  return (
    <div className={styles.pageContainer}>
      <Header />

      {/* Quiz Completed Section */}
      <div className={styles.quizCompleted}>
        <h2>Quiz Completed!</h2>
        <p>Here are your results for <strong>"Introduction to React Development"</strong></p>

        <div className={styles.shareRow}>
          <span>Share Your result!</span>
          <div className={styles.shareButtons}>
            <button>LinkedIn</button>
            <button>WhatsApp</button>
            <button>Facebook</button>
          </div>
        </div>

        <div className={styles.scoreBoxes}>
          <div className={`${styles.scoreBox} ${styles.purpleBox}`}>
            <div className={styles.score}>80%</div>
            <div className={styles.label}>Score: 4 out of 5 correct</div>
          </div>
          <div className={`${styles.scoreBox} ${styles.blueBox}`}>
            <div className={styles.score}>3/5</div>
            <div className={styles.label}>Correct Answers</div>
          </div>
          <div className={`${styles.scoreBox} ${styles.purpleBox}`}>
            <div className={styles.score}><span>🕒</span> 0:38</div>
            <div className={styles.label}>Time Taken</div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className={styles.contentGrid}>
        <div className={styles.leftSide}>
          <div className={styles.leftItem}>
            <DifficultyChart />
          </div>
          <div className={styles.leftItem}>
            <CertificatePreview />
          </div>
        </div>
        <div className={styles.rightSide}>
          <Leaderboard leaderboard={leaderboardData} />
        </div>
      </div>
    </div>
  );
}
