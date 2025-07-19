'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft,ChevronRight } from 'lucide-react';
import styles from './wait.module.css';
import Header from '../components/header'
export default function QuizResults() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 45,
    seconds: 42,
  });
  const timeUnits = ['hours', 'minutes', 'seconds'] as const;
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBackClick = () => {
    // Handle back navigation
    console.log('Back clicked');
  };

  const handleViewResult = () => {
    // Handle view result
    console.log('View Result clicked');
  };



  return (
    <>
    <Header/>
    <div className={styles.container}>
      {/* Back Button */}
      <div className={styles.backButton} onClick={handleBackClick}>
        <ChevronLeft size={20} />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>You're ahead of the game!</h1>
          <h2 className={styles.subtitle}>Now let's wait for the others to catch up.</h2>
          <p className={styles.description}>Hang tight — results drop in...</p>
        </div>

        {/* Countdown Timer */}
     {/* Countdown Timer */}
{/* Countdown Timer */}
<div className={styles.countdownContainer}>
      {timeUnits.map((unit, index) => (
        <div className={styles.timeBox} key={unit}>
          <div className={styles.gradientText}>
            <div className={`${styles.timeNumber} ${styles.gradientUnified}`} data-index={index}>
              {timeLeft[unit].toString().padStart(2, '0')}
            </div>
            <div className={`${styles.timeLabel} ${styles.gradientUnified}`} data-index={index}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </div>
          </div>
        </div>
      ))}
    </div>










        {/* View Result Button */}
        <div className={styles.buttonContainer}>
          <button className={styles.viewResultButton} onClick={handleViewResult}>
            View Result
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}