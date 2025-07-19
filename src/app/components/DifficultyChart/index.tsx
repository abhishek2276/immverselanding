'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import styles from './DifficultyChart.module.css';

const data = [
  {
    name: 'Easy',
    value: 78,
    fill: '#5B4BEB', // blue-violet
  },
  {
    name: 'Medium',
    value: 74,
    fill: '#FFB200', // amber
  },
  {
    name: 'Hard',
    value: 58,
    fill: '#EB298C', // pink-magenta
  },
];

const DifficultyChart = () => {
  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.heading}>Difficulty based Performance</h2>
      <p className={styles.subheading}>Your performance across different topics</p>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ angle: -20, dy: 10 }}
            style={{ fontSize: '14px', fill: '#444' }}
          />
          <YAxis domain={[0, 100]} tick={{ fontSize: 14 }} />
          <Tooltip />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DifficultyChart;
