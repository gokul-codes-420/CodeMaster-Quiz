import React, { useState } from 'react';
import { 
  X, 
  Settings as SettingsIcon, 
  User, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Clock, 
  AlertTriangle, 
  Trash2, 
  Save 
} from 'lucide-react';
import { sound } from '../utils/sound';

export function SettingsModal({
  settings,
  profile,
  onSaveSettings,
  onUpdateProfile,
  onResetData,
  onClose
}) {
  const [nickname, setNickname] = useState(profile?.nickname || 'Coder');
  const [soundEnabled, setSoundEnabled] = useState(settings?.soundEnabled ?? true);
  const [theme, setTheme] = useState(settings?.theme || 'dark');
  const [defaultTimer, setDefaultTimer] = useState(settings?.defaultTimer ?? 30);
  const [defaultQuestions, setDefaultQuestions] = useState(settings?.defaultQuestions || 10);
  const [confirmReset, setConfirmReset] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    sound.playClick();

    onSaveSettings({
      ...settings,
      soundEnabled,
      theme,
      defaultTimer,
      defaultQuestions
    });

    onUpdateProfile({
      nickname: nickname.trim() || 'Coder'
    });

    document.documentElement.setAttribute('data-theme', theme);
    sound.setEnabled(soundEnabled);

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleTestSound = () => {
    sound.setEnabled(true);
    sound.playCorrect();
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-card glass-panel" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-icon-badge bg-primary-glow">
              <SettingsIcon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="modal-title">Settings & Preferences</h3>
              <p className="modal-subtitle">Customize audio, timer defaults, and user profile</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close settings">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSave} className="modal-body">
          {/* Player Nickname */}
          <div className="form-group">
            <label className="form-label">
              <User size={16} /> Player Nickname
            </label>
            <input
              type="text"
              className="form-input"
              value={nickname}
              maxLength={20}
              placeholder="Enter your nickname..."
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>

          {/* Theme Selector */}
          <div className="form-group">
            <label className="form-label">Color Theme</label>
            <div className="theme-toggle-row">
              <button
                type="button"
                className={`theme-pick-btn ${theme === 'dark' ? 'theme-pick-active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                <Moon size={18} />
                <span>Dark Navy (Default)</span>
              </button>
              <button
                type="button"
                className={`theme-pick-btn ${theme === 'light' ? 'theme-pick-active' : ''}`}
                onClick={() => setTheme('light')}
              >
                <Sun size={18} />
                <span>Light Mode</span>
              </button>
            </div>
          </div>

          {/* Audio Sound FX */}
          <div className="form-group">
            <div className="flex-between">
              <label className="form-label">
                {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />} Audio & Sound Effects
              </label>
              <button 
                type="button" 
                className="btn-ghost btn-sm text-primary"
                onClick={handleTestSound}
              >
                Test Sound FX
              </button>
            </div>
            <label className="toggle-label mt-2">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
              />
              <span>Enable synthesized sound effects on answers and timer</span>
            </label>
          </div>

          {/* Default Timer */}
          <div className="form-group">
            <label className="form-label">
              <Clock size={16} /> Default Timer per Question
            </label>
            <div className="config-button-row">
              {[
                { val: 15, label: '15s' },
                { val: 30, label: '30s' },
                { val: 60, label: '60s' },
                { val: 0, label: 'Untimed' }
              ].map(item => (
                <button
                  type="button"
                  key={item.val}
                  className={`count-btn ${defaultTimer === item.val ? 'count-btn-active' : ''}`}
                  onClick={() => setDefaultTimer(item.val)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Default Question Count */}
          <div className="form-group">
            <label className="form-label">Default Question Count</label>
            <div className="config-button-row">
              {[5, 10, 20].map(cnt => (
                <button
                  type="button"
                  key={cnt}
                  className={`count-btn ${defaultQuestions === cnt ? 'count-btn-active' : ''}`}
                  onClick={() => setDefaultQuestions(cnt)}
                >
                  {cnt} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Danger Zone: Reset Data */}
          <div className="settings-danger-box">
            <div className="danger-text">
              <strong className="text-rose flex-center gap-1">
                <AlertTriangle size={16} /> Reset All Progress
              </strong>
              <p className="text-xs text-muted mt-1">
                Clears all quiz history, bookmarks, and achievement records from localStorage.
              </p>
            </div>

            {!confirmReset ? (
              <button
                type="button"
                className="btn btn-outline btn-sm text-rose"
                onClick={() => setConfirmReset(true)}
              >
                <Trash2 size={14} /> Reset Data
              </button>
            ) : (
              <div className="confirm-reset-row">
                <button
                  type="button"
                  className="btn btn-primary btn-sm bg-rose"
                  onClick={() => {
                    onResetData();
                    setConfirmReset(false);
                    onClose();
                  }}
                >
                  Confirm Reset
                </button>
                <button
                  type="button"
                  className="btn-ghost btn-sm"
                  onClick={() => setConfirmReset(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="modal-footer mt-6">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-lg">
              <Save size={16} />
              <span>{savedSuccess ? 'Saved!' : 'Save Preferences'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
