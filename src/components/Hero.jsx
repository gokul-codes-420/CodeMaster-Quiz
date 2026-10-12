import React from 'react';
import { sound } from '../utils/sound';

export function Hero({ 
  onExploreLanguages, 
  onStartRandomQuiz, 
  onStartDailyQuiz,
  onSelectFilterGroup
}) {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        {/* Top Update Capsule Pill - Matching Reference Image */}
        <div className="hero-update-pill">
          <span className="hero-pill-emoji">🎉</span>
          <span className="hero-pill-text">
            latest update : users can now practice 400+ coding questions across 20 languages with instant review & explanations.
          </span>
        </div>

        {/* Hero Main Bold Title with Highlight Capsule */}
        <h1 className="hero-main-title">
          Practice the previous
          <br />
          quiz <span className="hero-gradient-capsule">question papers</span>
          <br />
          CodeMaster Platform
        </h1>

        {/* Subtitle */}
        <p className="hero-subtext">
          This app is independently run by developers and is built to master coding concepts across 20 programming languages.
        </p>

        {/* 4 Black Rounded Pill Buttons - Exact Reference Style */}
        <div className="hero-pill-buttons-row">
          <button 
            className="hero-black-pill-btn"
            onClick={() => {
              sound.playClick();
              if (onSelectFilterGroup) onSelectFilterGroup('core');
              else onExploreLanguages();
            }}
          >
            Practice Quiz 1
          </button>

          <button 
            className="hero-black-pill-btn"
            onClick={() => {
              sound.playClick();
              if (onSelectFilterGroup) onSelectFilterGroup('web');
              else onExploreLanguages();
            }}
          >
            Practice Quiz 2
          </button>

          <button 
            className="hero-black-pill-btn"
            onClick={() => {
              sound.playClick();
              onStartDailyQuiz();
            }}
          >
            Practice End Term Quiz
          </button>

          <button 
            className="hero-black-pill-btn"
            onClick={() => {
              sound.playClick();
              onStartRandomQuiz();
            }}
          >
            Practice OPPE
          </button>
        </div>
      </div>
    </section>
  );
}
