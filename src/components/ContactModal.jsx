import React, { useState } from 'react';
import { X, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { sound } from '../utils/sound';

export function ContactModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('general');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playCorrect();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-card glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-icon-badge bg-primary-glow">
              <Mail size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="modal-title">Contact & Feedback</h3>
              <p className="modal-subtitle">Suggest new questions, report an issue, or say hello</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="contact-success-state animate-fade-in">
            <CheckCircle2 size={48} className="text-emerald mb-3" />
            <h3>Thank You for Your Feedback!</h3>
            <p className="text-secondary text-sm mt-1">
              Your message has been received. The CodeMaster team will review your suggestions!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-body">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Jane Developer"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="jane@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject Category</label>
              <select
                className="form-input form-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="general">General Feedback</option>
                <option value="question_suggestion">Suggest a New Question</option>
                <option value="bug_report">Report a Bug / Question Typo</option>
                <option value="feature_request">Request a New Feature</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                rows={4}
                placeholder="Share your thoughts or question suggestions..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="modal-footer mt-4">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-lg">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
