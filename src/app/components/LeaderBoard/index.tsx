// components/Leaderboard.tsx
'use client';

import React from 'react';
import styles from './Leaderboard.module.css';

type LeaderData = {
  rank: number;
  name: string;
  time: string;
  score: number;
  isYou?: boolean;
};

type Props = {
  leaderboard: LeaderData[];
};

const Leaderboard: React.FC<Props> = ({ leaderboard }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🏆 Leaderboard</h2>
      <p className={styles.subtitle}>Top performers in this quiz</p>
      {leaderboard.map((user, index) => (
        <div
          key={index}
          className={`${styles.item} ${user.isYou ? styles.youItem : ''}`}
        >
          <div className={styles.left}>
            <div className={`${styles.rankCircle} ${styles[`rank${user.rank}`]}`}>
              {user.rank <= 3 && !user.isYou ? (
                <span className={styles.medal}>{user.rank}</span>
              ) : (
                <span>{user.rank}</span>
              )}
            </div>
            <div className={styles.details}>
              <p className={user.isYou ? styles.youName : styles.name}>
                {user.isYou ? 'You' : user.name}
                <br></br>
                <span className={styles.time}>Time: {user.time}</span>
              </p>
            </div>
          </div>
          <div className={styles.score}>{user.score}%</div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
