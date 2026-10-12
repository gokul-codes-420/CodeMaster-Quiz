import React from 'react';
import { CategoryIcon } from './CategoryIcon';
import { sound } from '../utils/sound';

export function LanguageCard({ category, onStartQuiz, userAttempts }) {
  const { name, description, iconName, totalQuestions } = category;
  const attempts = userAttempts?.attempts || 0;
  const bestScore = userAttempts?.bestScore || 0;

  return (
    <div 
      className="course-card" 
      onClick={() => {
        sound.playClick();
        onStartQuiz(category);
      }}
      title={`Start ${name} Quiz`}
    >
      <div className="course-card-content">
        <h3 className="course-card-title">{name}</h3>
        <p className="course-card-desc">{description}</p>
        <div className="course-card-meta">
          <span className="course-meta-badge">{totalQuestions} questions</span>
          {attempts > 0 && (
            <span className="course-meta-badge badge-best">Best: {bestScore}%</span>
          )}
        </div>
      </div>

      <div className="course-card-icon-wrap">
        <CategoryIcon name={iconName} size={34} />
      </div>
    </div>
  );
}
