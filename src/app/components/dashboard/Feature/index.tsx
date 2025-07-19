'use client';
import React from 'react';
import Image from 'next/image';
import styles from './FeatureCards.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const cards = [
  {
    title: 'Be the AI Guru',
    desc: 'Step up and showcase your AI expertise—master the quiz and claim your spot as an AI Guru!',
    image: '/feature/feature3.svg',
    className: styles.card1,
  },
  {
    title: 'Secure the Top Spot',
    desc: 'Rise above the rest by acing the AI quiz—show off your skills and claim the leaderboard crown.',
    image: '/feature/feature1.svg',
    className: styles.card2,
  },
  {
    title: 'Quiz Master',
    desc: 'Show your AI prowess, answer with confidence, and earn your title as the Quiz Master.',
    image: '/feature/feature2.svg',
    className: styles.card3,
  },
];

export default function FeatureCards() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className={styles.title}>Impactful Title about features comes here.</h2>
        <p className={styles.subtitle}>
          A relevant sub text comes here, around two to three lines is expected here,
          fill this space.
        </p>
      </div>
      <Row className="justify-content-center">
        {cards.map((card, index) => (
          <Col key={index} xs={12} md={4} className="mb-5 d-flex flex-column align-items-center">
            <div className={styles.cardWrapper}>
              <div className={`${styles.card} ${card.className}`}>
                <Image src={card.image} className={styles.img} alt={card.title} width={120} height={120} />
              </div>
              <div className={styles.textBlock}>
                <h5 className={styles.cardTitle}>{card.title}</h5>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
