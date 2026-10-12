import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  X, 
  Send
} from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { Timer } from './Timer';
import { QuestionCard } from './QuestionCard';
import { CategoryIcon } from './CategoryIcon';
import { sound } from '../utils/sound';
import { saveActiveSession, clearActiveSession, toggleBookmark, isBookmarked } from '../utils/storage';

export function QuizPage({ 
  quizConfig, 
  onFinishQuiz, 
  onExitQuiz 
}) {
  const { 
    category, 
    questions = [], 
    timerSeconds = 30, 
    mode = 'exam',
    difficulty = 'all'
  } = quizConfig;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(timerSeconds);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [startTime] = useState(() => Date.now());

  const currentQ = questions[currentIndex] || null;
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFirstQuestion = currentIndex === 0;

  // Track timer interval
  const timerRef = useRef(null);

  // Load initial bookmarks
  useEffect(() => {
    const list = questions.map(q => q.id).filter(id => isBookmarked(id));
    setBookmarks(list);
  }, [questions]);

  // Save active session to prevent data loss on refresh
  useEffect(() => {
    saveActiveSession({
      quizConfig,
      currentIndex,
      answers,
      startTime
    });
  }, [quizConfig, currentIndex, answers, startTime]);

  // Reset timer on question change
  useEffect(() => {
    if (timerSeconds > 0) {
      setTimeLeft(timerSeconds);
    }
  }, [currentIndex, timerSeconds]);

  // Countdown timer tick
  useEffect(() => {
    if (timerSeconds <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentIndex, timerSeconds]);

  // Finish and compute results
  const handleSubmitQuiz = useCallback(() => {
    sound.playComplete();
    clearActiveSession();

    const timeTakenSeconds = Math.round((Date.now() - startTime) / 1000);
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const detailedReviews = questions.map(q => {
      const userChoice = answers[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      const isUnanswered = userChoice === undefined;

      if (isUnanswered) {
        unansweredCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      return {
        ...q,
        userAnswer: userChoice || null,
        isCorrect,
        isUnanswered
      };
    });

    const total = questions.length;
    const scorePercentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    onFinishQuiz({
      categoryId: category?.id || 'mix',
      categoryName: category?.name || 'Programming Mix',
      difficulty,
      totalQuestions: total,
      correctCount,
      incorrectCount,
      unansweredCount,
      scorePercentage,
      timeTakenSeconds,
      detailedReviews,
      quizConfig
    });
  }, [answers, category, difficulty, onFinishQuiz, questions, quizConfig, startTime]);

  // Handle timeout on a question
  const handleTimeOut = useCallback(() => {
    if (isLastQuestion) {
      handleSubmitQuiz();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isLastQuestion, handleSubmitQuiz]);

  // Handle selecting an answer
  const handleSelectAnswer = (option) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: option }));

    if (mode === 'practice') {
      if (option === currentQ.correctAnswer) {
        sound.playCorrect();
      } else {
        sound.playIncorrect();
      }
    } else {
      sound.playSelect();
    }
  };

  // Toggle bookmark for current question
  const handleToggleBookmark = (qId) => {
    const updated = toggleBookmark(qId);
    setBookmarks(questions.map(q => q.id).filter(id => updated.includes(id)));
  };

  // Next / Previous Navigation
  const handleNext = () => {
    if (!isLastQuestion) {
      sound.playClick();
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const handlePrev = () => {
    if (!isFirstQuestion) {
      sound.playClick();
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Keyboard accessibility shortcuts: A, B, C, D, 1, 2, 3, 4, Enter, Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if modal open or inside inputs
      if (showSubmitModal || showExitModal) return;
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toUpperCase();

      if (key === 'A' || key === '1') {
        if (currentQ.options?.[0]) handleSelectAnswer(currentQ.options[0]);
      } else if (key === 'B' || key === '2') {
        if (currentQ.options?.[1]) handleSelectAnswer(currentQ.options[1]);
      } else if (key === 'C' || key === '3') {
        if (currentQ.options?.[2]) handleSelectAnswer(currentQ.options[2]);
      } else if (key === 'D' || key === '4') {
        if (currentQ.options?.[3]) handleSelectAnswer(currentQ.options[3]);
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (!isLastQuestion) {
          handleNext();
        } else {
          setShowSubmitModal(true);
        }
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQ, isLastQuestion, isFirstQuestion, showSubmitModal, showExitModal]);

  const unansweredTotal = questions.filter(q => answers[q.id] === undefined).length;

  // Guard for empty questions (placed safely after all hooks)
  if (!questions || questions.length === 0) {
    return (
      <div className="container py-16 text-center animate-fade-in">
        <h2 className="text-xl font-bold mb-3">No questions available for this selection.</h2>
        <p className="text-secondary text-sm mb-6">Please choose another category or adjust difficulty filters.</p>
        <button className="hero-black-pill-btn" onClick={onExitQuiz}>
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-view-container animate-fade-in">
      <div className="container quiz-inner">
        {/* Top Header Bar */}
        <div className="quiz-top-bar glass-panel">
          <div className="quiz-top-left">
            <button 
              className="btn btn-ghost btn-sm"
              onClick={() => {
                sound.playClick();
                setShowExitModal(true);
              }}
              title="Exit Quiz"
            >
              <ArrowLeft size={16} />
              <span>Exit Quiz</span>
            </button>

            <div className="quiz-top-cat">
              <CategoryIcon name={category?.iconName || 'Code2'} size={20} color={category?.accentColor || '#3B82F6'} />
              <span className="quiz-top-name">{category?.name}</span>
              <span className={`badge badge-${difficulty === 'all' ? 'primary' : difficulty}`}>
                {difficulty}
              </span>
            </div>
          </div>

          <div className="quiz-top-right">
            {/* Countdown Timer */}
            <Timer
              timeLeft={timeLeft}
              maxTime={timerSeconds}
              onTimeOut={handleTimeOut}
              active={timerSeconds > 0}
            />

            {/* Direct Submit Button */}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                sound.playClick();
                setShowSubmitModal(true);
              }}
            >
              <Send size={15} />
              <span>Submit Quiz</span>
            </button>
          </div>
        </div>

        {/* Progress Tracker */}
        <ProgressBar
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          answers={answers}
          questions={questions}
          onJumpToQuestion={setCurrentIndex}
          bookmarks={bookmarks}
        />

        {/* Active Question Card */}
        {currentQ && (
          <QuestionCard
            key={currentQ.id || currentIndex}
            question={currentQ}
            selectedAnswer={answers[currentQ.id]}
            onSelectAnswer={handleSelectAnswer}
            isBookmarked={bookmarks.includes(currentQ.id)}
            onToggleBookmark={handleToggleBookmark}
            mode={mode}
          />
        )}

        {/* Navigation Bottom Controls */}
        <div className="quiz-nav-footer">
          <button
            className="btn btn-secondary btn-lg"
            onClick={handlePrev}
            disabled={isFirstQuestion}
          >
            <ArrowLeft size={18} />
            <span>Previous</span>
          </button>

          <div className="quiz-footer-status">
            <span>
              {answers[currentQ.id] !== undefined ? (
                <span className="text-emerald font-semibold">Answer Saved</span>
              ) : (
                <span className="text-muted">Unanswered</span>
              )}
            </span>
          </div>

          {!isLastQuestion ? (
            <button
              className="btn btn-primary btn-lg"
              onClick={handleNext}
            >
              <span>Next</span>
              <ArrowRight size={18} />
            </button>
          ) : (
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                sound.playClick();
                setShowSubmitModal(true);
              }}
            >
              <CheckCircle size={18} />
              <span>Submit Quiz</span>
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal Before Submission */}
      {showSubmitModal && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowSubmitModal(false)}>
          <div className="modal-card glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <div className="modal-icon-badge bg-primary-glow">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="modal-title">Ready to Submit?</h3>
                  <p className="modal-subtitle">Review your progress before finalizing</p>
                </div>
              </div>
              <button className="icon-btn" onClick={() => setShowSubmitModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {unansweredTotal > 0 ? (
                <div className="submit-warning-card">
                  <AlertTriangle size={20} className="text-amber" />
                  <div>
                    <strong className="text-amber">You have {unansweredTotal} unanswered question(s).</strong>
                    <p className="text-muted text-sm mt-1">
                      Unanswered questions will be counted as incorrect. Are you sure you want to proceed?
                    </p>
                  </div>
                </div>
              ) : (
                <div className="submit-success-card">
                  <CheckCircle size={20} className="text-emerald" />
                  <div>
                    <strong className="text-emerald">All {questions.length} questions answered!</strong>
                    <p className="text-muted text-sm mt-1">
                      Submit now to view your score, performance badge, and complete explanations.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowSubmitModal(false)}
              >
                Keep Reviewing
              </button>
              <button 
                className="btn btn-primary btn-lg" 
                onClick={handleSubmitQuiz}
              >
                <Send size={16} /> Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="modal-backdrop animate-fade-in" onClick={() => setShowExitModal(false)}>
          <div className="modal-card glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <div className="modal-icon-badge bg-rose-glow">
                  <AlertTriangle size={24} className="text-rose" />
                </div>
                <div>
                  <h3 className="modal-title">Leave Active Quiz?</h3>
                  <p className="modal-subtitle">Your current progress on this attempt will be lost</p>
                </div>
              </div>
              <button className="icon-btn" onClick={() => setShowExitModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="text-secondary">
                Are you sure you want to exit? Your active quiz score won't be saved to history if you leave now.
              </p>
            </div>

            <div className="modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowExitModal(false)}
              >
                Continue Quiz
              </button>
              <button 
                className="btn btn-primary"
                style={{ background: '#ef4444' }}
                onClick={() => {
                  clearActiveSession();
                  onExitQuiz();
                }}
              >
                Exit to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
