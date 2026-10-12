import React, { useState } from 'react';
import { 
  Lightbulb, 
  Bookmark, 
  Copy, 
  Check, 
  CheckCircle2, 
  XCircle, 
  Code,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/sound';

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  isBookmarked,
  onToggleBookmark,
  mode = 'exam' // 'exam' or 'practice'
}) {
  const [showHint, setShowHint] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const optionLetters = ['A', 'B', 'C', 'D'];

  if (!question) {
    return (
      <div className="question-card text-center py-12 text-secondary">
        <p>No question available.</p>
      </div>
    );
  }

  const handleCopyCode = () => {
    if (!question.codeSnippet) return;
    navigator.clipboard.writeText(question.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const isPracticeMode = mode === 'practice';
  const hasAnswered = selectedAnswer !== undefined;
  const options = Array.isArray(question.options) ? question.options : [];

  const getTypeLabel = (type) => {
    switch (type) {
      case 'output': return 'Find the Output';
      case 'syntax_error': return 'Syntax & Gotchas';
      case 'fill_blank': return 'Fill-in-the-Blank';
      case 'true_false': return 'True or False';
      case 'match_concept': return 'Concept Match';
      default: return 'Multiple Choice';
    }
  };

  return (
    <div className="question-card">
      {/* Top Meta Header */}
      <div className="q-card-top-bar">
        <div className="q-type-badge">
          <Code size={14} />
          <span>{getTypeLabel(question.type)}</span>
        </div>

        <div className="q-actions-top">
          {/* Hint Button */}
          {question.hint && (
            <button
              className={`q-action-btn ${showHint ? 'q-hint-active' : ''}`}
              title="Need a hint?"
              onClick={() => {
                sound.playClick();
                setShowHint(!showHint);
              }}
            >
              <Lightbulb size={16} />
              <span>{showHint ? 'Hide Clue' : 'Hint'}</span>
            </button>
          )}

          {/* Bookmark Button */}
          <button
            className={`q-action-btn ${isBookmarked ? 'q-bookmark-active' : ''}`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark this question'}
            onClick={() => {
              sound.playClick();
              onToggleBookmark(question.id);
            }}
          >
            <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
            <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
          </button>
        </div>
      </div>

      {/* Clue / Hint Box (if toggled) */}
      {showHint && question.hint && (
        <div className="hint-drawer">
          <Sparkles size={16} className="hint-icon text-amber" />
          <div className="hint-text">
            <strong>Clue:</strong> {question.hint}
          </div>
        </div>
      )}

      {/* Question Text */}
      <h2 className="q-prompt">{question.question}</h2>

      {/* Code Snippet Box (if provided) */}
      {question.codeSnippet && (
        <div className="code-box">
          <div className="code-header">
            <span className="code-lang-label">Code snippet</span>
            <button 
              className="copy-code-btn"
              onClick={handleCopyCode}
              title="Copy code to clipboard"
            >
              {copiedCode ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              <span>{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="code-content">
            <code>{question.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* Answer Options Grid */}
      <div className="options-grid">
        {options.map((opt, index) => {
          const letter = optionLetters[index] || (index + 1);
          const isSelected = selectedAnswer === opt;
          const isCorrect = opt === question.correctAnswer;

          let optionClass = 'option-btn';
          if (isSelected) optionClass += ' option-selected';

          if (isPracticeMode && hasAnswered) {
            if (isCorrect) {
              optionClass += ' option-correct';
            } else if (isSelected && !isCorrect) {
              optionClass += ' option-incorrect';
            }
          }

          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => {
                if (isPracticeMode && hasAnswered) return; // Prevent changing in practice mode
                sound.playSelect();
                onSelectAnswer(opt);
              }}
            >
              <div className="option-keycap">
                <span>{letter}</span>
              </div>
              <div className="option-label">
                <span>{opt}</span>
              </div>
              <div className="option-status-icon">
                {isPracticeMode && hasAnswered && isCorrect && (
                  <CheckCircle2 size={18} className="text-emerald" />
                )}
                {isPracticeMode && hasAnswered && isSelected && !isCorrect && (
                  <XCircle size={18} className="text-rose" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Practice Mode Explanation Drawer */}
      {isPracticeMode && hasAnswered && (
        <div className="practice-explanation-box glass-panel animate-fade-in">
          <div className="explanation-title-row">
            <CheckCircle2 size={18} className="text-emerald" />
            <h4>Explanation</h4>
          </div>
          <p className="explanation-text">{question.explanation}</p>
        </div>
      )}

      {/* Keyboard Shortcut Indicator Helper */}
      <div className="keyboard-helper-hint">
        <span>💡 Keyboard shortcuts: Press <strong>A, B, C, D</strong> or <strong>1, 2, 3, 4</strong> to select</span>
      </div>
    </div>
  );
}
