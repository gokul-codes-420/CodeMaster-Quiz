import React from 'react';
import { X, Code2, Sparkles, Shield, Heart } from 'lucide-react';

export function AboutModal({ onClose }) {
  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-card glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="brand-icon-wrapper">
              <Code2 size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="modal-title">About CodeMaster Quiz</h3>
              <p className="modal-subtitle">Learn Code. Test Your Skills. Level Up!</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body about-body">
          <p className="text-secondary leading-relaxed">
            <strong>CodeMaster Quiz</strong> is an open educational platform engineered to help software engineers, computer science students, and curious learners benchmark and sharpen their technical knowledge.
          </p>

          <div className="about-features-list mt-4">
            <div className="about-feat-item">
              <Sparkles size={18} className="text-primary" />
              <div>
                <strong>20 Comprehensive Categories</strong>
                <p className="text-sm text-muted">Covering front-end, back-end, systems programming, and computer science foundations.</p>
              </div>
            </div>

            <div className="about-feat-item">
              <Shield size={18} className="text-emerald" />
              <div>
                <strong>In-Depth Explanations</strong>
                <p className="text-sm text-muted">Every single question features verified rationale to help you learn from each attempt.</p>
              </div>
            </div>

            <div className="about-feat-item">
              <Heart size={18} className="text-rose" />
              <div>
                <strong>100% Free & Privacy-First</strong>
                <p className="text-sm text-muted">All scores and streak records remain local in your browser session without tracking cookies.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Got it, Let's Code!
          </button>
        </div>
      </div>
    </div>
  );
}
