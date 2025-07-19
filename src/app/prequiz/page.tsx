'use client';
import Header from '../components/header'
import { useState } from 'react';
import { MapPin, Calendar, BookOpen, Clock, Users } from 'lucide-react';
import styles from './prequiz.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('on-going');
  const [accessCode, setAccessCode] = useState('');

  const handleAccessCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccessCode(e.target.value);
  };

  return (
    <>
    <Header/>
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome to the AI Challenge Quiz</h1>
        <p className={styles.subtitle}>The AI Quiz Showdown Begins Now!</p>
        <p className={styles.description}>
          From machine learning to neural networks, prove your expertise and rise through the ranks.
        </p>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Section - Events */}
        <div className={styles.leftSection}>
          {/* Tab Navigation */}
          <div className={styles.tabNavigation}>
            <button 
              className={`${styles.tab} ${activeTab === 'past' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Event
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'on-going' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('on-going')}
            >
              On-going Event
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'coming-soon' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('coming-soon')}
            >
              Coming Soon Event
            </button>
          </div>

          <div className={styles.eventsSection}>
            <h3 className={styles.eventsTitle}>Other Ongoing events:</h3>
            
            <div className={styles.eventCard}>
              <div className={styles.eventCardContent}>
                <div className={styles.eventCardLeft}>
                  <div className={styles.eventOverlay}>
                    <h4 className={styles.eventCardTitle}>On-going Event: Tech Innovation 2025</h4>
                    <div className={styles.eventDetails}>
                      <span className={styles.eventLocation}> <MapPin size={16}  /> Global Online</span>
                      <span className={styles.eventTime}><Calendar size={16}  />Live Now</span>   
                    </div>
                  </div>
                </div>
                <span className={styles.activeLabel}>Active</span>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.eventCardContent}>
                <div className={styles.eventCardLeft}>
                  <div className={styles.eventOverlay}>
                    <h4 className={styles.eventCardTitle}>On-going Event: Tech Innovation 2025</h4>
                    <div className={styles.eventDetails}>
                      <span className={styles.eventLocation}> <MapPin size={16}  /> Global Online</span>
                      <span className={styles.eventTime}><Calendar size={16}  />Live Now</span>     
                    </div>
                  </div>
                </div>
                <span className={styles.activeLabel}>Active</span>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.eventCardContent}>
                <div className={styles.eventCardLeft}>
                  <div className={styles.eventOverlay} style={{color:'black'}}>
                    <h4 className={styles.eventCardTitle}>Coming Soon: Tech Innovation 2025</h4>
                    <div className={styles.eventDetails}>
                      <span className={styles.eventLocation}> <MapPin size={16}  /> Global Online</span>
                      <span className={styles.eventTime}><Calendar size={16}  />12th August 2025</span>
                    </div>
                  </div>
                </div>
                <span className={styles.comingSoonLabel}>Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Ready to Begin */}
        <div className={styles.rightSection}>
          <div className={styles.readyToBeginContainer}>
            <h2 className={styles.readyTitle}>Ready to Begin?</h2>
            <p className={styles.readySubtitle}>Enter your access code and select your preferred theme</p>
            
            <div className={styles.accessCodeSection}>
              <label className={styles.accessLabel}>Access Code</label>
              <div className={styles.accessInputRow}>
                <input
                  type="text"
                  placeholder="Enter access code"
                  value={accessCode}
                  onChange={handleAccessCodeChange}
                  className={styles.accessInput}
                />
                <button className={styles.requestCodeBtn}>Request for Access code</button>
              </div>
            </div>

            <div className={styles.quizContentGrid}>
              <div className={styles.quizInfoColumn}>
                <div className={styles.quizInfoCard}>
                  <div className={styles.quizInfoIcon}>
                    <BookOpen size={24} color="#4A38D9" />
                  </div>
                  <div className={styles.quizInfoContent}>
                    <h4 className={styles.quizInfoTitle}>5 Questions</h4>
                    <p className={styles.quizInfoDesc}>Mixed format</p>
                  </div>
                </div>

                <div className={styles.quizInfoCard}>
                  <div className={styles.quizInfoIcon}>
                    <Clock size={24} color="#4A38D9" />
                  </div>
                  <div className={styles.quizInfoContent}>
                    <h4 className={styles.quizInfoTitle}>60 Minutes</h4>
                    <p className={styles.quizInfoDesc}>Time limit</p>
                  </div>
                </div>

                <div className={styles.quizInfoCard}>
                  <div className={styles.quizInfoIcon}>
                    <Users size={24} color="#4A38D9" />
                  </div>
                  <div className={styles.quizInfoContent}>
                    <h4 className={styles.quizInfoTitle}>Intermediate</h4>
                    <p className={styles.quizInfoDesc}>Difficulty</p>
                  </div>
                </div>
              </div>

              <div className={styles.quizDetailsColumn}>
                <div className={styles.instructionsSection}>
                  <h3 className={styles.instructionsTitle}>Instructions</h3>
                  <ul className={styles.instructionsList}>
                    <li>Read each question carefully before selecting your answer</li>
                    <li>In case of tie: Faster submission wins.</li>
                    <li>Your progress is automatically saved as you answer questions</li>
                    <li>Make sure to answer all questions before the time runs out</li>
                    <li>Score calculation: +5 marks correct, -1 mark incorrect</li>
                  </ul>
                  <div className={styles.questionTypesSection}>
                  <h3 className={styles.questionTypesTitle}>Question Types</h3>
                  <div className={styles.questionTypesTags}>
                    <span className={styles.questionTypeTag}>Multiple Choice</span>
                    <span className={styles.questionTypeTag}>True/False</span>
                    <span className={styles.questionTypeTag}>Drag & Drop</span>
                  </div>
                </div>
                </div>

                
              </div>
            </div>

            <button className={styles.startQuizBtn}>
              Start Quiz Challenge
            </button>
          </div>
        </div>
      </div>

      {/* Quiz Rules Section */}
      <div className={styles.quizRulesSection}>
        <div className={styles.quizRulesContainer}>
          <h2 className={styles.quizRulesTitle}>Quiz Rules</h2>
          <p className={styles.quizRulesSubtitle}>A sub text about Quiz rules and regulations</p>
          
          <ul className={styles.quizRulesList}>
            <li>No use of unauthorized devices or apps during the quiz.</li>
            <li>Keep your camera and microphone on if proctoring is enabled.</li>
            <li>Do not switch tabs or windows; stay on the quiz page only.</li>
            <li>No communication with others during the quiz.</li>
            <li>Avoid using phones or secondary screens unless allowed.</li>
            <li>Follow all instructions given by the proctor or exam system.</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}