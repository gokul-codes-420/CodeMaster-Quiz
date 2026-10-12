import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Clock, 
  HelpCircle, 
  Sliders, 
  Shuffle, 
  CheckCircle2, 
  Zap, 
  BookOpen 
} from 'lucide-react';
import { CategoryIcon } from './CategoryIcon';
import { sound } from '../utils/sound';

export function QuizConfigModal({ category, onClose, onLaunchQuiz, initialSettings }) {
  const [difficulty, setDifficulty] = useState('all'); // 'all', 'easy', 'medium', 'hard'
  const [questionCount, setQuestionCount] = useState(initialSettings?.defaultQuestions || 10);
  const [timerSeconds, setTimerSeconds] = useState(initialSettings?.defaultTimer ?? 30);
  const [mode, setMode] = useState(initialSettings?.practiceMode ? 'practice' : 'exam');
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);

  const isRandomMix = category?.id === 'random-mix';

  const handleLaunch = () => {
    sound.playClick();
    onLaunchQuiz({
      category,
      difficulty,
      questionCount,
      timerSeconds,
      mode,
      shuffleQuestions,
      shuffleOptions
    });
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div 
        className="modal-card glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-accent': category?.accentColor || '#3B82F6' }}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <div 
              className="modal-icon-badge"
              style={{ 
                backgroundColor: `${category?.accentColor || '#3B82F6'}20`,
                color: category?.accentColor || '#3B82F6'
              }}
            >
              <CategoryIcon name={category?.iconName || 'Code2'} size={24} color={category?.accentColor || '#3B82F6'} />
            </div>
            <div>
              <h3 className="modal-title">
                {isRandomMix ? 'Random Quiz Challenge' : `${category?.name} Quiz`}
              </h3>
              <p className="modal-subtitle">Configure your preferences and start playing</p>
            </div>
          </div>
          <button className="icon-btn modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* 1. Difficulty Level Selector */}
          <div className="config-group">
            <label className="config-label">
              <Sliders size={16} /> Difficulty Level
            </label>
            <div className="config-pills-grid">
              {[
                { id: 'all', label: 'All Levels', desc: 'Balanced mix' },
                { id: 'easy', label: 'Easy', desc: 'Basic concepts & syntax' },
                { id: 'medium', label: 'Medium', desc: 'Logic & practical code' },
                { id: 'hard', label: 'Hard', desc: 'Advanced internals & output' }
              ].map(opt => (
                <button
                  key={opt.id}
                  className={`config-pill-btn ${difficulty === opt.id ? 'config-pill-active' : ''}`}
                  onClick={() => {
                    sound.playSelect();
                    setDifficulty(opt.id);
                  }}
                >
                  <span className="pill-title">{opt.label}</span>
                  <span className="pill-desc">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Number of Questions */}
          <div className="config-group">
            <label className="config-label">
              <HelpCircle size={16} /> Questions Count
            </label>
            <div className="config-button-row">
              {[5, 10, 20, 'all'].map(count => (
                <button
                  key={count}
                  className={`count-btn ${questionCount === count ? 'count-btn-active' : ''}`}
                  onClick={() => {
                    sound.playSelect();
                    setQuestionCount(count);
                  }}
                >
                  {count === 'all' ? 'All (20)' : `${count} Qs`}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Timer per Question */}
          <div className="config-group">
            <label className="config-label">
              <Clock size={16} /> Timer per Question
            </label>
            <div className="config-button-row">
              {[
                { val: 15, label: '15s' },
                { val: 30, label: '30s (Default)' },
                { val: 60, label: '60s' },
                { val: 0, label: 'No Timer' }
              ].map(t => (
                <button
                  key={t.val}
                  className={`count-btn ${timerSeconds === t.val ? 'count-btn-active' : ''}`}
                  onClick={() => {
                    sound.playSelect();
                    setTimerSeconds(t.val);
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Quiz Mode (Exam vs Practice) */}
          <div className="config-group">
            <label className="config-label">
              <BookOpen size={16} /> Quiz Mode
            </label>
            <div className="mode-toggle-grid">
              <button
                className={`mode-card ${mode === 'exam' ? 'mode-card-active' : ''}`}
                onClick={() => {
                  sound.playSelect();
                  setMode('exam');
                }}
              >
                <div className="mode-icon-wrap">
                  <Zap size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="mode-title">Exam Mode</h4>
                  <p className="mode-desc">Standard timed test. Scores & explanations revealed upon final submission.</p>
                </div>
              </button>

              <button
                className={`mode-card ${mode === 'practice' ? 'mode-card-active' : ''}`}
                onClick={() => {
                  sound.playSelect();
                  setMode('practice');
                }}
              >
                <div className="mode-icon-wrap">
                  <CheckCircle2 size={18} className="text-emerald" />
                </div>
                <div>
                  <h4 className="mode-title">Instant Practice Mode</h4>
                  <p className="mode-desc">Learn at your pace. Immediate right/wrong feedback with full explanations on each question.</p>
                </div>
              </button>
            </div>
          </div>

          {/* 5. Shuffle Toggles */}
          <div className="config-group config-toggles-row">
            <label className="toggle-label">
              <input 
                type="checkbox" 
                checked={shuffleQuestions} 
                onChange={(e) => setShuffleQuestions(e.target.checked)} 
              />
              <span>Shuffle questions order</span>
            </label>

            <label className="toggle-label">
              <input 
                type="checkbox" 
                checked={shuffleOptions} 
                onChange={(e) => setShuffleOptions(e.target.checked)} 
              />
              <span>Shuffle answer choices</span>
            </label>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary btn-lg" onClick={handleLaunch}>
            <Play size={18} fill="currentColor" />
            <span>Start {isRandomMix ? 'Random Quiz' : category?.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
