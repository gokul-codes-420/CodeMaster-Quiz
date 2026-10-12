import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  Sparkles, 
  Award, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Bookmark, 
  RotateCcw, 
  BarChart3, 
  Play, 
  Layers,
  Star
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { ACHIEVEMENTS } from '../data/achievements';
import { CategoryIcon } from './CategoryIcon';
import { sound } from '../utils/sound';

export function Dashboard({ 
  profile, 
  history = [], 
  bookmarks = [], 
  achievements = [], 
  onStartQuizWithCategory,
  onPracticeBookmarks 
}) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'mastery', 'achievements', 'bookmarks', 'history'

  const totalQuizzes = profile.quizzesCompleted || 0;
  const totalCorrect = profile.totalCorrect || 0;
  const totalAnswered = profile.totalAnswered || 0;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  
  // Calculate highest score from history
  const highestScore = history.length > 0 
    ? Math.max(...history.map(h => h.scorePercentage || 0)) 
    : 0;

  // Calculate average score
  const avgScore = history.length > 0
    ? Math.round(history.reduce((acc, cur) => acc + (cur.scorePercentage || 0), 0) / history.length)
    : 0;

  // Player level based on total XP
  const level = Math.floor((profile.totalXp || 0) / 200) + 1;
  const xpCurrentLevel = (profile.totalXp || 0) % 200;
  const xpNeeded = 200;
  const levelProgress = Math.round((xpCurrentLevel / xpNeeded) * 100);

  const categoryAttempts = profile.categoryAttempts || {};

  return (
    <div className="dashboard-container">
      <div className="container dashboard-inner">
        {/* Profile Hero Header */}
        <div className="dash-hero-card">
          <div className="dash-user-row">
            <div className="dash-avatar">
              <span className="dash-avatar-txt">
                {profile.nickname?.slice(0, 2).toUpperCase() || 'CM'}
              </span>
            </div>

            <div className="dash-user-meta">
              <div className="dash-name-row">
                <h1 className="dash-username">{profile.nickname || 'Coder'}</h1>
                <span className="dash-level-pill">Level {level} Coder</span>
              </div>
              <p className="dash-joined text-muted text-sm">
                Member since {profile.joinedDate || 'Recently'} &bull; Daily Streak: {profile.currentStreak || 1} Days
              </p>

              {/* XP Level Progress Bar */}
              <div className="dash-xp-track-wrap">
                <div className="dash-xp-labels">
                  <span className="text-xs text-muted">XP Progress to Level {level + 1}</span>
                  <span className="text-xs font-semibold text-primary">{xpCurrentLevel} / {xpNeeded} XP</span>
                </div>
                <div className="dash-xp-track">
                  <div className="dash-xp-fill" style={{ width: `${levelProgress}%` }} />
                </div>
              </div>
            </div>

            {/* Streak & XP Badges */}
            <div className="dash-hero-badges">
              <div className="dash-streak-badge">
                <Flame size={24} className="text-amber" />
                <div>
                  <span className="dash-badge-val">{profile.currentStreak || 1}</span>
                  <span className="dash-badge-lbl">Day Streak</span>
                </div>
              </div>

              <div className="dash-xp-badge">
                <Sparkles size={24} className="text-violet" />
                <div>
                  <span className="dash-badge-val">{profile.totalXp || 0}</span>
                  <span className="dash-badge-lbl">Total XP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Counter */}
          <div className="dash-metrics-grid">
            <div className="dash-metric-card">
              <span className="dash-m-val">{totalQuizzes}</span>
              <span className="dash-m-lbl">Quizzes Taken</span>
            </div>
            <div className="dash-metric-card">
              <span className="dash-m-val text-primary">{avgScore}%</span>
              <span className="dash-m-lbl">Average Score</span>
            </div>
            <div className="dash-metric-card">
              <span className="dash-m-val text-emerald">{highestScore}%</span>
              <span className="dash-m-lbl">Highest Score</span>
            </div>
            <div className="dash-metric-card">
              <span className="dash-m-val text-violet">{accuracy}%</span>
              <span className="dash-m-lbl">Accuracy Rate</span>
            </div>
            <div className="dash-metric-card">
              <span className="dash-m-val">{totalCorrect}</span>
              <span className="dash-m-lbl">Correct Answers</span>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="dash-tabs-bar">
          <button
            className={`dash-tab ${activeTab === 'overview' ? 'dash-tab-active' : ''}`}
            onClick={() => {
              sound.playClick();
              setActiveTab('overview');
            }}
          >
            <BarChart3 size={16} />
            <span>Mastery Overview</span>
          </button>

          <button
            className={`dash-tab ${activeTab === 'achievements' ? 'dash-tab-active' : ''}`}
            onClick={() => {
              sound.playClick();
              setActiveTab('achievements');
            }}
          >
            <Trophy size={16} />
            <span>Achievements ({achievements.length}/{ACHIEVEMENTS.length})</span>
          </button>

          <button
            className={`dash-tab ${activeTab === 'bookmarks' ? 'dash-tab-active' : ''}`}
            onClick={() => {
              sound.playClick();
              setActiveTab('bookmarks');
            }}
          >
            <Bookmark size={16} />
            <span>Bookmarks ({bookmarks.length})</span>
          </button>

          <button
            className={`dash-tab ${activeTab === 'history' ? 'dash-tab-active' : ''}`}
            onClick={() => {
              sound.playClick();
              setActiveTab('history');
            }}
          >
            <Clock size={16} />
            <span>Quiz History ({history.length})</span>
          </button>
        </div>

        {/* TAB 1: Category Mastery Overview */}
        {activeTab === 'overview' && (
          <div className="dash-tab-content animate-fade-in">
            <div className="content-hdr">
              <h2 className="content-title">Progress by Programming Language</h2>
              <p className="content-sub">Your proficiency across all 20 programming languages and computer science domains.</p>
            </div>

            <div className="mastery-grid">
              {CATEGORIES.map(cat => {
                const stats = categoryAttempts[cat.id] || { attempts: 0, bestScore: 0, totalCorrect: 0 };
                const hasAttempted = stats.attempts > 0;

                return (
                  <div key={cat.id} className="mastery-card glass-panel">
                    <div className="mastery-top">
                      <div className="mastery-icon-box" style={{ color: cat.accentColor, backgroundColor: `${cat.accentColor}18` }}>
                        <CategoryIcon name={cat.iconName} size={22} color={cat.accentColor} />
                      </div>
                      <div className="mastery-title-wrap">
                        <h3 className="mastery-name">{cat.name}</h3>
                        <span className="mastery-attempts text-xs text-muted">
                          {hasAttempted ? `${stats.attempts} quiz attempts` : 'Not attempted yet'}
                        </span>
                      </div>
                      {hasAttempted && (
                        <span className="mastery-best-pill">Best: {stats.bestScore}%</span>
                      )}
                    </div>

                    {/* Progress Meter */}
                    <div className="mastery-progress-track">
                      <div 
                        className="mastery-progress-fill" 
                        style={{ 
                          width: `${stats.bestScore || 0}%`,
                          backgroundColor: cat.accentColor 
                        }} 
                      />
                    </div>

                    <div className="mastery-footer">
                      <span className="text-xs text-muted">20 Questions</span>
                      <button 
                        className="btn btn-outline btn-sm"
                        onClick={() => {
                          sound.playClick();
                          onStartQuizWithCategory(cat.id);
                        }}
                      >
                        <Play size={13} fill="currentColor" />
                        <span>{hasAttempted ? 'Retake' : 'Start'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Achievements Badges */}
        {activeTab === 'achievements' && (
          <div className="dash-tab-content animate-fade-in">
            <div className="content-hdr">
              <h2 className="content-title">Unlocked Achievements</h2>
              <p className="content-sub">Earn badges and extra XP points by hitting milestones.</p>
            </div>

            <div className="achievements-grid">
              {ACHIEVEMENTS.map(badge => {
                const isUnlocked = achievements.includes(badge.id);

                return (
                  <div 
                    key={badge.id}
                    className={`achievement-card glass-panel ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}`}
                  >
                    <div className={`badge-icon-wrap ${isUnlocked ? 'badge-icon-unlocked' : 'badge-icon-locked'}`}>
                      <Award size={32} />
                    </div>

                    <div className="badge-info">
                      <div className="badge-hdr-row">
                        <h3 className="badge-title">{badge.title}</h3>
                        <span className="badge-pts text-xs">+{badge.points} XP</span>
                      </div>
                      <p className="badge-desc">{badge.description}</p>
                      <div className="badge-status-row">
                        {isUnlocked ? (
                          <span className="badge-status-unlocked">
                            <CheckCircle2 size={14} /> Unlocked
                          </span>
                        ) : (
                          <span className="badge-status-locked">
                            Locked
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: Bookmarks */}
        {activeTab === 'bookmarks' && (
          <div className="dash-tab-content animate-fade-in">
            <div className="content-hdr">
              <div className="content-hdr-split">
                <div>
                  <h2 className="content-title">Bookmarked Questions</h2>
                  <p className="content-sub">Review tricky questions you've saved during quiz sessions.</p>
                </div>
                {bookmarks.length > 0 && (
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      sound.playClick();
                      onPracticeBookmarks();
                    }}
                  >
                    <RotateCcw size={16} />
                    <span>Practice All Bookmarks</span>
                  </button>
                )}
              </div>
            </div>

            {bookmarks.length > 0 ? (
              <div className="bookmarks-list">
                <p className="text-secondary mb-4">
                  You have saved <strong>{bookmarks.length}</strong> questions to your personal study bank.
                </p>
                <div className="bookmarks-action-box glass-panel">
                  <Bookmark size={24} className="text-amber" />
                  <div>
                    <h4>Ready to test your bookmarked questions?</h4>
                    <p className="text-sm text-muted">
                      Launch a focused practice session featuring all of your saved questions.
                    </p>
                  </div>
                  <button 
                    className="btn btn-primary ml-auto"
                    onClick={() => {
                      sound.playClick();
                      onPracticeBookmarks();
                    }}
                  >
                    Start Bookmark Quiz
                  </button>
                </div>
              </div>
            ) : (
              <div className="empty-state-box glass-panel">
                <Bookmark size={40} className="empty-icon text-muted" />
                <h3 className="empty-title">No bookmarks yet</h3>
                <p className="empty-desc">
                  When taking a quiz, click the Bookmark icon to save difficult questions for future study.
                </p>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: Quiz History Table */}
        {activeTab === 'history' && (
          <div className="dash-tab-content animate-fade-in">
            <div className="content-hdr">
              <h2 className="content-title">Recent Quiz History</h2>
              <p className="content-sub">Review your historical quiz attempts, scores, and completion times.</p>
            </div>

            {history.length > 0 ? (
              <div className="history-table-wrap glass-panel">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Category</th>
                      <th>Difficulty</th>
                      <th>Score</th>
                      <th>Correct / Total</th>
                      <th>Time Taken</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((item, idx) => (
                      <tr key={idx}>
                        <td className="text-muted text-sm">
                          {item.timestamp ? new Date(item.timestamp).toLocaleDateString() : 'Today'}
                        </td>
                        <td>
                          <strong>{item.categoryName}</strong>
                        </td>
                        <td>
                          <span className={`badge badge-${item.difficulty === 'all' ? 'primary' : item.difficulty}`}>
                            {item.difficulty}
                          </span>
                        </td>
                        <td>
                          <span className={`font-semibold ${item.scorePercentage >= 70 ? 'text-emerald' : 'text-primary'}`}>
                            {item.scorePercentage}%
                          </span>
                        </td>
                        <td>
                          {item.correctCount} / {item.totalQuestions}
                        </td>
                        <td className="text-muted">
                          {item.timeTakenSeconds}s
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="empty-state-box glass-panel">
                <Clock size={40} className="empty-icon text-muted" />
                <h3 className="empty-title">No quizzes completed yet</h3>
                <p className="empty-desc">
                  Start your first programming quiz to begin tracking your history and learning analytics!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
