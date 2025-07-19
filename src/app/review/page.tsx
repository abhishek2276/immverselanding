'use client';
import { useState, useEffect } from 'react';
import { ChevronRight , Clock, X } from 'lucide-react';
import styles from './quiz-review.module.css';

interface Question {
  id: number;
  question: string;
  answer: string;
  type: 'text' | 'image';
  isMultipleChoice?: boolean;
  options?: string[];
  selectedOption?: string;
}

export default function QuizReview() {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(396); // 6:36 in seconds

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
      type: "text"
    },
    {
      id: 2,
      question: "What is the capital of France?",
      answer: "/ans.svg",
      type: "image"
    },
    {
      id: 3,
      question: "What is the capital of France?",
      answer: "Fast Learner- Fast Learner\nExecutes code repeatedly- Executes code repeatedly\nReusable code block- Reusable code block",
      type: "text"
    },
    {
      id: 4,
      question: "What is the capital of France?",
      answer: "Variable- Fast Learner",
      type: "text"
    }
  ];
  useEffect(() => {
    if (questions && questions.length > 0 && openQuestions.size === 0) {
      const initialOpen = new Set(questions.map((q) => q.id));
      setOpenQuestions(initialOpen);
    }
  }, [questions]);
  const toggleQuestion = (questionId: number) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const handleArrowClick = (e: React.MouseEvent, questionId: number) => {
    e.stopPropagation();
    toggleQuestion(questionId);
  };

  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          {/* Left - Logo */}
          <div className={styles.logoSection}>
  <div className={styles.logo}>
    <div className={styles.logoIcon}>
      <img
        src="/navbarlogo.svg" // replace with actual path
        alt="ImmerseAI Logo"
        className={styles.logoImage} // optional: use this class for styling
      />
    </div>
  </div>
</div>


          {/* Center - Title */}
          <div className={styles.titleSection}>
            <h1 className={styles.pageTitle}>AI Challenge Quiz</h1>
          </div>

          {/* Right - Time and Exit */}
          <div className={styles.actionsSection}>
            <div className={styles.timeDisplay}>
              <Clock size={14} />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <button className={styles.exitButton}>
              <X size={14} />
              <span>Exit Quiz</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.reviewHeader}>
          <h2 className={styles.reviewTitle}>Review your answers before submitting!</h2>
          <p className={styles.reviewSubtitle}>A sub text about reviewing answers</p>
        </div>

        {/* Questions Accordion */}
        <div className={styles.questionsContainer}>
          {questions.map((question) => (
            <div key={question.id} className={styles.questionCard}>
              <div className={styles.questionHeader}>
                <div className={styles.questionHeaderLeft}>
                  <span className={styles.questionNumber}>{question.id}</span>
                  <span className={styles.questionText}>{question.question}</span>
                </div>
                <div className={styles.questionHeaderRight}>
  <span className={styles.editAnswer}>
    <img
      src="/edit.svg" // Replace with your image path
      alt="Edit"
      width={14}
      height={14}
      style={{ marginRight: '6px' }}
    />
    Edit Answer
  </span>
  <div
  className={`${styles.arrowIcon} ${openQuestions.has(question.id) ? styles.rotated : ''}`}
  onClick={(e) => handleArrowClick(e, question.id)}
>
  <img src="/arrow.svg" alt="Toggle" className={styles.arrowImage} />
</div>

</div>

              </div>
              <div className={`${styles.questionBody} ${openQuestions.has(question.id) ? styles.questionBodyOpen : ''}`}>
  <div className={styles.answerSection}>
    <span className={styles.answerLabel}>Your Answer:</span>

    {question.answer ? (
      <div className={styles.answerContent}>
        {question.type === 'image' ? (
          <div className={styles.imageAnswer}>
            <img src={question.answer} alt="Answer" className={styles.answerImage} />
          </div>
        ) : (
          <div className={styles.answerText}>
            {question.answer.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        )}
      </div>
    ) : (
      <div className={styles.noAnswer}>No answer provided</div>
    )}
  </div>
</div>

            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className={styles.submitSection}>
          <button className={styles.submitButton}>
            Submit Quiz
            <span className={styles.submitArrow}> <ChevronRight size={18} /></span>
          </button>
        </div>
      </div>
    </div>
  );
}