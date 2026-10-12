import React, { useState } from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  Sparkles, 
  RotateCcw, 
  BookOpen, 
  Home, 
  Share2, 
  Check, 
  Filter,
  Bookmark,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { sound } from '../utils/sound';

export function ResultsPage({ 
  result, 
  onRetryQuiz, 
  onChooseAnother, 
  onGoHome 
}) {
  const {
    categoryName,
    difficulty,
    totalQuestions,
    correctCount,
    incorrectCount,
    unansweredCount,
    scorePercentage,
    timeTakenSeconds,
    detailedReviews = []
  } = result;

  const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'incorrect', 'correct'
  const [copiedShare, setCopiedShare] = useState(false);
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  // Performance ranking message
  const getPerformanceFeedback = () => {
    if (scorePercentage === 100) {
      return {
        badge: 'Legendary Code Master 👑',
        msg: 'Flawless performance! You answered every question with precision.',
        colorClass: 'text-amber'
      };
    }
    if (scorePercentage >= 80) {
      return {
        badge: 'Senior Developer 🔥',
        msg: 'Outstanding work! Your understanding of these concepts is rock solid.',
        colorClass: 'text-emerald'
      };
    }
    if (scorePercentage >= 60) {
      return {
        badge: 'Competent Coder 👍',
        msg: 'Good effort! Review the detailed explanations below to polish edge cases.',
        colorClass: 'text-primary'
      };
    }
    return {
      badge: 'Keep Leveling Up 🚀',
      msg: 'Great practice run. Dive into the question explanations below to strengthen your fundamentals.',
      colorClass: 'text-secondary'
    };
  };

  const feedback = getPerformanceFeedback();

  // Format time taken
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    if (mins === 0) return `${remainder}s`;
    return `${mins}m ${remainder}s`;
  };

  // Filtered reviews
  const filteredReviews = detailedReviews.filter(item => {
    if (reviewFilter === 'incorrect') return !item.isCorrect;
    if (reviewFilter === 'correct') return item.isCorrect;
    return true;
  });

  // Share text
  const handleShare = () => {
    sound.playClick();
    const shareText = `🎯 I scored ${scorePercentage}% (${correctCount}/${totalQuestions}) on the ${categoryName} quiz on CodeMaster Quiz! Test your coding skills now: https://codemasterquiz.dev`;
    navigator.clipboard.writeText(shareText);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  const xpEarned = Math.round(scorePercentage * 2 + correctCount * 10);

  return (
    <div className="results-view-container">
      <div className="container results-inner">
        {/* Main Performance Summary Card */}
        <div className="results-hero-card">
          <div className="results-badge-wrap">
            <span className="results-rank-pill">{feedback.badge}</span>
            <span className={`badge badge-${difficulty === 'all' ? 'primary' : difficulty}`}>
              {difficulty.toUpperCase()}
            </span>
          </div>

          <h1 className="results-title">Quiz Completed</h1>
          <p className="results-subtitle">{categoryName} &bull; {feedback.msg}</p>

          {/* Simple Clean Score Box */}
          <div className="score-summary-box">
            <div className="score-main-number">{scorePercentage}%</div>
            <div className="score-main-fraction">{correctCount} of {totalQuestions} correct</div>
          </div>

          {/* Key Metrics Grid */}
          <div className="metrics-grid">
            <div className="metric-box">
              <CheckCircle2 size={20} className="text-emerald" />
              <div className="metric-data">
                <span className="metric-val text-emerald">{correctCount}</span>
                <span className="metric-lbl">Correct</span>
              </div>
            </div>

            <div className="metric-box">
              <XCircle size={20} className="text-rose" />
              <div className="metric-data">
                <span className="metric-val text-rose">{incorrectCount}</span>
                <span className="metric-lbl">Incorrect</span>
              </div>
            </div>

            <div className="metric-box">
              <HelpCircle size={20} className="text-amber" />
              <div className="metric-data">
                <span className="metric-val text-amber">{unansweredCount}</span>
                <span className="metric-lbl">Unanswered</span>
              </div>
            </div>

            <div className="metric-box">
              <Clock size={20} className="text-primary" />
              <div className="metric-data">
                <span className="metric-val">{formatTime(timeTakenSeconds)}</span>
                <span className="metric-lbl">Time Taken</span>
              </div>
            </div>

            <div className="metric-box">
              <Sparkles size={20} className="text-violet" />
              <div className="metric-data">
                <span className="metric-val text-violet">+{xpEarned}</span>
                <span className="metric-lbl">XP Earned</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="results-cta-row">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => {
                sound.playClick();
                onRetryQuiz();
              }}
            >
              <RotateCcw size={18} />
              <span>Retry Quiz</span>
            </button>

            <button 
              className="btn btn-secondary btn-lg"
              onClick={() => {
                sound.playClick();
                onChooseAnother();
              }}
            >
              <BookOpen size={18} />
              <span>Choose Another Language</span>
            </button>

            <button 
              className="btn btn-outline"
              onClick={handleShare}
            >
              {copiedShare ? <Check size={18} className="text-emerald" /> : <Share2 size={18} />}
              <span>{copiedShare ? 'Copied Link!' : 'Share Results'}</span>
            </button>

            <button 
              className="btn btn-ghost"
              onClick={() => {
                sound.playClick();
                onGoHome();
              }}
            >
              <Home size={18} />
              <span>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Answer Review Section */}
        <section className="answer-review-section">
          <div className="review-header-bar">
            <div>
              <h2 className="review-heading">Review Answers & Explanations</h2>
              <p className="review-sub">Master concepts by understanding why answers are correct or incorrect.</p>
            </div>

            {/* Filter Pills */}
            <div className="review-filter-pills">
              <button
                className={`filter-btn ${reviewFilter === 'all' ? 'filter-btn-active' : ''}`}
                onClick={() => setReviewFilter('all')}
              >
                All ({detailedReviews.length})
              </button>
              <button
                className={`filter-btn ${reviewFilter === 'incorrect' ? 'filter-btn-active' : ''}`}
                onClick={() => setReviewFilter('incorrect')}
              >
                Incorrect Only ({incorrectCount + unansweredCount})
              </button>
              <button
                className={`filter-btn ${reviewFilter === 'correct' ? 'filter-btn-active' : ''}`}
                onClick={() => setReviewFilter('correct')}
              >
                Correct ({correctCount})
              </button>
            </div>
          </div>

          {/* Review List Cards */}
          <div className="review-list">
            {filteredReviews.map((item, index) => {
              const isExpanded = expandedReviewId === (item.id || index);

              return (
                <div 
                  key={item.id || index}
                  className={`review-card glass-panel ${item.isCorrect ? 'review-card-correct' : 'review-card-incorrect'}`}
                >
                  <div 
                    className="review-card-header"
                    onClick={() => setExpandedReviewId(isExpanded ? null : (item.id || index))}
                  >
                    <div className="review-card-status">
                      {item.isCorrect ? (
                        <CheckCircle2 size={22} className="text-emerald" />
                      ) : (
                        <XCircle size={22} className="text-rose" />
                      )}
                      <div>
                        <span className="review-q-num">Question {index + 1}</span>
                        <h3 className="review-q-text">{item.question}</h3>
                      </div>
                    </div>

                    <button className="icon-btn" aria-label="Toggle details">
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  {/* Code snippet if present */}
                  {item.codeSnippet && (
                    <div className="code-box">
                      <pre className="code-content">
                        <code>{item.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* Answers summary comparison */}
                  <div className="review-answers-grid">
                    <div className={`answer-box ${item.isCorrect ? 'answer-box-correct' : 'answer-box-user-wrong'}`}>
                      <span className="answer-box-label">Your Answer:</span>
                      <strong className="answer-box-val">
                        {item.userAnswer || <em className="text-muted">Unanswered</em>}
                      </strong>
                    </div>

                    {!item.isCorrect && (
                      <div className="answer-box answer-box-correct">
                        <span className="answer-box-label">Correct Answer:</span>
                        <strong className="answer-box-val text-emerald">
                          {item.correctAnswer}
                        </strong>
                      </div>
                    )}
                  </div>

                  {/* In-depth educational explanation */}
                  <div className="explanation-drawer">
                    <div className="explanation-hdr">
                      <Sparkles size={16} className="text-primary" />
                      <h4>Explanation</h4>
                    </div>
                    <p className="explanation-body">{item.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
