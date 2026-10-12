import React from 'react';
import { Calendar, Play, Check } from 'lucide-react';
import { sound } from '../utils/sound';

export function DailyQuizBanner({ onStartDailyQuiz, dailyStatus }) {
  const isCompleted = dailyStatus?.completed;
  const todayFormatted = new Date().toLocaleDateString(undefined, { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <section className="daily-banner-section">
      <div className="container">
        <div className="daily-banner-card">
          <div className="daily-banner-content">
            <span className="daily-date-label">
              <Calendar size={14} /> Today: {todayFormatted}
            </span>
            <h3 className="daily-title">Daily 5-Question Coding Challenge</h3>
            <p className="daily-desc">
              Test a quick 5-question mix across categories to maintain your learning streak.
            </p>
          </div>

          <div className="daily-action-box">
            {isCompleted ? (
              <span className="daily-done-badge">
                <Check size={14} /> Completed ({dailyStatus.score}%)
              </span>
            ) : (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  sound.playClick();
                  onStartDailyQuiz();
                }}
              >
                <Play size={14} fill="currentColor" /> Play Daily
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
