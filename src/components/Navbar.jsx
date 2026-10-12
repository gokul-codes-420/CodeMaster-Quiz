import React, { useState } from 'react';
import { 
  Flame, 
  Sun, 
  Moon, 
  Settings, 
  Menu, 
  X
} from 'lucide-react';
import { sound } from '../utils/sound';

export function Navbar({ 
  currentView, 
  setCurrentView, 
  profile, 
  settings, 
  onUpdateSettings,
  onOpenSettings
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = settings.theme === 'dark' ? 'light' : 'dark';
    onUpdateSettings({ theme: next });
    document.documentElement.setAttribute('data-theme', next);
    sound.playClick();
  };

  const navItem = (view, label) => {
    const active = currentView === view;
    return (
      <button
        key={view}
        onClick={() => {
          sound.playClick();
          setCurrentView(view);
          setMobileMenuOpen(false);
        }}
        className={`nav-link ${active ? 'nav-link-active' : ''}`}
      >
        <span>{label}</span>
      </button>
    );
  };

  return (
    <header className="navbar-container">
      <div className="container nav-inner">
        {/* Brand Logo - CM CodeMaster style */}
        <div 
          className="brand-logo" 
          onClick={() => {
            sound.playClick();
            setCurrentView('home');
            setMobileMenuOpen(false);
          }}
        >
          <div className="brand-badge-box">
            <span>CM</span>
          </div>
          <span className="brand-title">CodeMaster</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navItem('home', 'Home')}
          {navItem('categories', 'Languages')}
          <button
            onClick={() => {
              sound.playClick();
              setCurrentView('daily');
              setMobileMenuOpen(false);
            }}
            className={`nav-link ${currentView === 'daily' ? 'nav-link-active' : ''}`}
          >
            <span>Daily Quiz</span>
            <span className="nav-new-badge">NEW</span>
          </button>
          {navItem('dashboard', 'Dashboard')}
          {navItem('leaderboard', 'Leaderboard')}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <div className="streak-tag" title="Daily streak">
            <Flame size={14} />
            <span>{profile.currentStreak || 1}d</span>
          </div>

          <div 
            className="xp-tag" 
            title="Total XP"
            onClick={() => {
              sound.playClick();
              setCurrentView('dashboard');
            }}
          >
            <span>{profile.totalXp || 0} XP</span>
          </div>

          <button 
            className="icon-btn-circle" 
            title="Toggle Theme"
            onClick={toggleTheme}
          >
            {settings.theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button 
            className="icon-btn" 
            title="Settings"
            onClick={() => {
              sound.playClick();
              onOpenSettings();
            }}
          >
            <Settings size={15} />
          </button>

          <button 
            className="icon-btn mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            {navItem('home', 'Home')}
            {navItem('categories', 'Languages')}
            {navItem('daily', 'Daily Challenge')}
            {navItem('dashboard', 'Dashboard')}
            {navItem('leaderboard', 'Leaderboard')}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
