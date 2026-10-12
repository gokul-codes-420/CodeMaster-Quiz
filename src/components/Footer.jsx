import React from 'react';
import { 
  ArrowUp, 
  ShieldCheck, 
  Mail, 
  Info 
} from 'lucide-react';
import { sound } from '../utils/sound';

export function Footer({ 
  onNavigate, 
  onOpenAbout, 
  onOpenPrivacy, 
  onOpenContact 
}) {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-inner">
        {/* Top Footer Row */}
        <div className="footer-top-row">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-logo" onClick={() => onNavigate('home')}>
              <div className="brand-badge-box">
                <span>CM</span>
              </div>
              <span className="brand-title">CodeMaster</span>
            </div>
            <p className="footer-tagline">
              Learn Code. Test Your Skills. Level Up!
            </p>
            <p className="footer-desc text-muted text-sm">
              The premier interactive coding knowledge platform with 400+ questions across 20 languages and CS domains.
            </p>
          </div>

          {/* Quick Categories Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => onNavigate('home')}>Home</button></li>
              <li><button onClick={() => onNavigate('categories')}>All 20 Languages</button></li>
              <li><button onClick={() => onNavigate('daily')}>Daily Coding Challenge</button></li>
              <li><button onClick={() => onNavigate('dashboard')}>User Dashboard</button></li>
              <li><button onClick={() => onNavigate('leaderboard')}>Leaderboard & Tiers</button></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Popular Quizzes</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => onNavigate('categories')}>Python Programming</button></li>
              <li><button onClick={() => onNavigate('categories')}>JavaScript ES6+</button></li>
              <li><button onClick={() => onNavigate('categories')}>React.js Frontend</button></li>
              <li><button onClick={() => onNavigate('categories')}>Java & JVM</button></li>
              <li><button onClick={() => onNavigate('categories')}>Data Structures & Algorithms</button></li>
            </ul>
          </div>

          {/* Information & Social */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources & Help</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={onOpenAbout}>
                  <Info size={14} className="inline mr-1" /> About Platform
                </button>
              </li>
              <li>
                <button onClick={onOpenContact}>
                  <Mail size={14} className="inline mr-1" /> Contact & Feedback
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy}>
                  <ShieldCheck size={14} className="inline mr-1" /> Privacy Policy
                </button>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="footer-social-row">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link" title="CodeMaster on GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="footer-bottom-row">
          <div className="footer-attribution">
            <span className="footer-creator-text">
              This Webpage Maked By - Gokul_Official
            </span>
          </div>

          <button 
            className="footer-scroll-btn text-xs text-muted"
            onClick={scrollToTop}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
