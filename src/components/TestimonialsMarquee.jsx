import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Send, Check, X, Star } from 'lucide-react';

export function TestimonialsMarquee({ onOpenShareYours }) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareName, setShareName] = useState('');
  const [shareRole, setShareRole] = useState('Developer');
  const [shareFeedback, setShareFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Row 1 Reviews (scrolling right-to-left)
  const row1Reviews = [
    {
      name: 'Sunny Arya',
      role: 'Degree Student',
      avatarBg: 'linear-gradient(135deg, #f43f5e 0%, #fbbf24 100%)',
      quote: "I didn't study anything just practiced here with concept notes and I scored way above my expectations in campus placements!"
    },
    {
      name: 'Harsh Shah',
      role: 'Diploma Student',
      avatarBg: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      quote: "With its great user interface, it matches almost the real coding test pattern even better with dark mode and instant clues."
    },
    {
      name: 'Haifa',
      role: 'Frontend Learner',
      avatarBg: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      quote: "The perfect place to practice JavaScript and React for upcoming interviews and ace all trick questions!"
    },
    {
      name: 'Rohan Das',
      role: 'Software Engineer',
      avatarBg: 'linear-gradient(135deg, #0284c7 0%, #10b981 100%)',
      quote: "The output-prediction questions in C++ and Python are spot on. Helped me clear technical rounds easily."
    }
  ];

  // Row 2 Reviews (scrolling left-to-right)
  const row2Reviews = [
    {
      name: 'Anshu Rajbhar',
      role: 'CS Graduate',
      avatarBg: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      quote: "Literally loved the website, it contains all 20 subjects and all the questions that too in quiz form making it an ideal place for learners."
    },
    {
      name: 'Irina',
      role: 'Full Stack Engineer',
      avatarBg: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
      quote: "The overall user experience is smooth, and the platform is very helpful for practicing tricky syntax gotchas and DSA concepts."
    },
    {
      name: 'Adul P R',
      role: 'Foundation Coder',
      avatarBg: 'linear-gradient(135deg, #84cc16 0%, #eab308 100%)',
      quote: "CodeMaster has been a game-changer! The mock tests are well-structured and replicate the real test environment. Clean and user-friendly."
    },
    {
      name: 'Kavitha S',
      role: 'Backend Dev',
      avatarBg: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      quote: "SQL and Node.js question sets were super comprehensive. Explanation notes after submitting made studying so effortless."
    }
  ];

  // Duplicate for seamless 50% infinite loops
  const row1Repeated = [...row1Reviews, ...row1Reviews];
  const row2Repeated = [...row2Reviews, ...row2Reviews];

  const handleShareSubmit = (e) => {
    e.preventDefault();
    if (!shareName.trim() || !shareFeedback.trim()) return;
    sound.playCorrect();
    setSubmitted(true);
    setTimeout(() => {
      setShowShareModal(false);
      setSubmitted(false);
      setShareName('');
      setShareFeedback('');
    }, 2000);
  };

  return (
    <section className="testimonials-section">
      <div className="container testimonials-wrapper">
        {/* Left Callout Block - Matches Reference Image */}
        <div className="testimonials-left-col">
          <h2 className="testimonials-title">
            Your
            <br />
            Experience,
            <br />
            Our Pride
          </h2>
          <p className="testimonials-desc">
            Discover why our users love our platform and how it&apos;s making a difference in their learning journey.
          </p>
          <button 
            className="btn btn-secondary testimonials-share-btn"
            onClick={() => {
              sound.playClick();
              setShowShareModal(true);
            }}
          >
            Share Yours
          </button>
        </div>

        {/* Right Marquee Streams */}
        <div className="testimonials-right-col">
          <div className="marquee-fade-overlay left-fade" />
          <div className="marquee-fade-overlay right-fade" />

          {/* Row 1: Right to Left (RTL) */}
          <div className="marquee-track-container">
            <div className="marquee-row marquee-row-rtl">
              {row1Repeated.map((item, index) => (
                <div key={`r1-${index}`} className="marquee-card">
                  <div className="marquee-card-header">
                    <div 
                      className="marquee-avatar" 
                      style={{ background: item.avatarBg }}
                    />
                    <div className="marquee-user-meta">
                      <h4 className="marquee-name">{item.name}</h4>
                      <span className="marquee-role">{item.role}</span>
                    </div>
                  </div>
                  <p className="marquee-quote">{item.quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right (LTR) */}
          <div className="marquee-track-container mt-4">
            <div className="marquee-row marquee-row-ltr">
              {row2Repeated.map((item, index) => (
                <div key={`r2-${index}`} className="marquee-card">
                  <div className="marquee-card-header">
                    <div 
                      className="marquee-avatar" 
                      style={{ background: item.avatarBg }}
                    />
                    <div className="marquee-user-meta">
                      <h4 className="marquee-name">{item.name}</h4>
                      <span className="marquee-role">{item.role}</span>
                    </div>
                  </div>
                  <p className="marquee-quote">{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Share Yours Feedback Modal */}
      {showShareModal && (
        <div className="modal-backdrop" onClick={() => setShowShareModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-info">
                <div className="modal-icon-badge">
                  <Star size={18} />
                </div>
                <div>
                  <h3 className="modal-title">Share Your Experience</h3>
                  <p className="modal-subtitle">Your review inspires thousands of coders</p>
                </div>
              </div>
              <button className="icon-btn" onClick={() => setShowShareModal(false)}>
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="contact-success-state">
                <Check size={36} className="text-emerald mb-3" />
                <h4 className="font-bold">Thank You for Your Feedback!</h4>
                <p className="text-secondary text-sm mt-1">Your experience has been recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleShareSubmit} className="modal-body">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sunny Arya"
                    className="form-input"
                    value={shareName}
                    onChange={e => setShareName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Role or Track</label>
                  <input
                    type="text"
                    placeholder="e.g. Student / Full Stack Developer"
                    className="form-input"
                    value={shareRole}
                    onChange={e => setShareRole(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Experience / Review</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you liked about the questions, user interface, or explanations..."
                    className="form-input form-textarea"
                    value={shareFeedback}
                    onChange={e => setShareFeedback(e.target.value)}
                  />
                </div>

                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowShareModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <Send size={14} /> Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
