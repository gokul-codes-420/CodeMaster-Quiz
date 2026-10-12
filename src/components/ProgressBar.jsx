import React from 'react';
import { Bookmark } from 'lucide-react';
import { sound } from '../utils/sound';

export function ProgressBar({ 
  currentIndex, 
  totalQuestions, 
  answers, 
  questions, 
  onJumpToQuestion, 
  bookmarks 
}) {
  const percentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="progress-section">
      {/* Top Header Information */}
      <div className="progress-header">
        <div className="progress-counter">
          <span className="q-label">Question</span>
          <span className="q-numbers">
            <strong>{currentIndex + 1}</strong> <span className="text-muted">/ {totalQuestions}</span>
          </span>
        </div>

        <div className="progress-stats">
          <span className="answered-pill">
            {answeredCount} of {totalQuestions} Answered
          </span>
        </div>
      </div>

      {/* Linear Smooth Progress Bar */}
      <div className="progress-track">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Interactive Question Step Navigator Dots */}
      <div className="palette-dots-row">
        {questions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = answers[q.id] !== undefined;
          const isBookmarked = bookmarks?.includes(q.id);

          return (
            <button
              key={q.id || idx}
              type="button"
              className={`palette-dot ${isCurrent ? 'palette-dot-current' : ''} ${isAnswered ? 'palette-dot-answered' : ''}`}
              title={`Question ${idx + 1}: ${isAnswered ? 'Answered' : 'Unanswered'}`}
              onClick={() => {
                sound.playClick();
                onJumpToQuestion(idx);
              }}
            >
              <span>{idx + 1}</span>
              {isBookmarked && (
                <span className="dot-bookmark-indicator">★</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
