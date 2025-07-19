'use client';
import Header from '../components/header'
import { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('on-going');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    guardianName: '',
    address: '',
    phoneCode: '+91',
    phoneNumber: '',
    otp: '',
    schoolName: '',
    quizEvent: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
                      <span className={styles.eventTime}><Calendar size={16}  />Live Now</span>   </div>
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
                      <span className={styles.eventTime}><Calendar size={16}  />Live Now</span>     </div>
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

        {/* Right Section - Form */}
        <div className={styles.rightSection}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Register for AI Challenge Quiz</h2>
            <p className={styles.formSubtitle}>Sub text about registering in quiz.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Participant's First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Participant's Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Participant's DOB</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Guardian's Name</label>
                  <input
                    type="text"
                    name="guardianName"
                    placeholder="Name"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Participant's Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Guardian's Phone No. (WhatsApp, OTP will be sent)</label>
                <div className={styles.phoneRow}>
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleInputChange}
                    className={styles.phoneCode}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone No."
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={styles.phoneInput}
                  />
                  <button type="button" className={styles.sendOtpBtn}>
                    Send OTP
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Verify OTP</label>
                <div className={styles.otpRow}>
                  <input
                    type="text"
                    name="otp"
                    placeholder="* * * *"
                    value={formData.otp}
                    onChange={handleInputChange}
                    className={styles.otpInput}
                  />
                  <button type="button" className={styles.verifyOtpBtn}>
                    Verify OTP
                  </button>
                  <span className={styles.resendOtp}>
                    Resend OTP in 00:60
                  </span>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>School Name (Optional)</label>
                <select
                  name="quizEvent"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">School Name </option>
                  <option value="ai-challenge-2025">School</option>
                  <option value="tech-innovation-2025">School</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Select Quiz Event</label>
                <select
                  name="quizEvent"
                  value={formData.quizEvent}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Select Name (Event Name + date)</option>
                  <option value="ai-challenge-2025">AI Challenge Quiz 2025</option>
                  <option value="tech-innovation-2025">Tech Innovation 2025</option>
                </select>
              </div>

              <button type="submit" className={styles.submitBtn} disabled>
                Enroll
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}