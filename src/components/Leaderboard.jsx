import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Flame, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Star,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../utils/sound';

export function Leaderboard({ profile, history = [] }) {
  const [filterPeriod, setFilterPeriod] = useState('all'); // 'all', 'high_scores'

  const totalXp = profile.totalXp || 0;
  const quizzesCompleted = profile.quizzesCompleted || 0;
  const totalCorrect = profile.totalCorrect || 0;
  const totalAnswered = profile.totalAnswered || 0;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // Determine Rank Tier
  const getRankTier = (xp) => {
    if (xp >= 1000) return { name: 'Diamond Division', color: '#06b6d4', icon: '💎' };
    if (xp >= 500) return { name: 'Platinum Division', color: '#a855f7', icon: '🏆' };
    if (xp >= 250) return { name: 'Gold Division', color: '#f59e0b', icon: '🥇' };
    if (xp >= 100) return { name: 'Silver Division', color: '#94a3b8', icon: '🥈' };
    return { name: 'Bronze Division', color: '#d97706', icon: '🥉' };
  };

  const rankTier = getRankTier(totalXp);

  // Sort best performances
  const sortedPerformances = [...history].sort((a, b) => (b.scorePercentage || 0) - (a.scorePercentage || 0));

  return (
    <div className="leaderboard-container">
      <div className="container leaderboard-inner">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Leaderboard & Tiers</h2>
          <p className="section-desc">
            Track your tier progression and personal best scores across all challenges.
          </p>
        </div>

        {/* Current Player Ranking Banner */}
        <div className="leaderboard-tier-card">
          <div className="tier-header-row">
            <div className="tier-icon-wrap" style={{ borderColor: rankTier.color }}>
              <span className="tier-emoji">{rankTier.icon}</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted">Current Tier Status</span>
              <h3 className="tier-heading" style={{ color: rankTier.color }}>{rankTier.name}</h3>
              <p className="text-secondary text-sm">
                Player: <strong>{profile.nickname || 'Coder'}</strong> &bull; Total Points: <strong>{totalXp} XP</strong>
              </p>
            </div>
          </div>

          <div className="tier-stats-row">
            <div className="tier-stat-item">
              <span className="tier-stat-label">Total Points</span>
              <strong className="tier-stat-num text-primary">{totalXp} XP</strong>
            </div>
            <div className="tier-stat-item">
              <span className="tier-stat-label">Quizzes Completed</span>
              <strong className="tier-stat-num">{quizzesCompleted}</strong>
            </div>
            <div className="tier-stat-item">
              <span className="tier-stat-label">Accuracy Rate</span>
              <strong className="tier-stat-num text-emerald">{accuracy}%</strong>
            </div>
            <div className="tier-stat-item">
              <span className="tier-stat-label">Daily Streak</span>
              <strong className="tier-stat-num text-amber">{profile.currentStreak || 1} 🔥</strong>
            </div>
          </div>
        </div>

        {/* High Scores Table */}
        <div className="high-scores-section mt-8">
          <div className="content-hdr">
            <h3 className="content-title">Personal High Score Records</h3>
            <p className="content-sub">Verified scores recorded from your completed quizzes.</p>
          </div>

          {sortedPerformances.length > 0 ? (
            <div className="high-scores-table-wrap glass-panel">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Score</th>
                    <th>Correct</th>
                    <th>Time</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedPerformances.slice(0, 15).map((item, index) => {
                    const isTop1 = index === 0;
                    const isTop2 = index === 1;
                    const isTop3 = index === 2;

                    return (
                      <tr key={index} className={isTop1 ? 'row-gold' : ''}>
                        <td>
                          <span className="rank-badge">
                            {isTop1 ? '🥇 #1' : isTop2 ? '🥈 #2' : isTop3 ? '🥉 #3' : `#${index + 1}`}
                          </span>
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
                          <strong className={item.scorePercentage >= 80 ? 'text-emerald' : 'text-primary'}>
                            {item.scorePercentage}%
                          </strong>
                        </td>
                        <td>{item.correctCount} / {item.totalQuestions}</td>
                        <td className="text-muted">{item.timeTakenSeconds}s</td>
                        <td className="text-muted text-sm">
                          {item.timestamp ? new Date(item.timestamp).toLocaleDateString() : 'Recent'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state-box glass-panel">
              <Trophy size={40} className="empty-icon text-muted" />
              <h3 className="empty-title">No high scores yet</h3>
              <p className="empty-desc">
                Complete a quiz to record your first verified high score on the personal leaderboard.
              </p>
            </div>
          )}
        </div>

        {/* Division Tiers Explainer */}
        <div className="tiers-explainer glass-panel mt-8">
          <h4 className="tiers-title">Division Tier Hierarchy</h4>
          <div className="tiers-grid">
            <div className="tier-badge-card">
              <span className="tier-card-icon">🥉</span>
              <h5>Bronze</h5>
              <p>0 - 99 XP</p>
            </div>
            <div className="tier-badge-card">
              <span className="tier-card-icon">🥈</span>
              <h5>Silver</h5>
              <p>100 - 249 XP</p>
            </div>
            <div className="tier-badge-card">
              <span className="tier-card-icon">🥇</span>
              <h5>Gold</h5>
              <p>250 - 499 XP</p>
            </div>
            <div className="tier-badge-card">
              <span className="tier-card-icon">🏆</span>
              <h5>Platinum</h5>
              <p>500 - 999 XP</p>
            </div>
            <div className="tier-badge-card">
              <span className="tier-card-icon">💎</span>
              <h5>Diamond</h5>
              <p>1000+ XP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
