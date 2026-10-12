import React, { useState, useEffect } from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { DailyQuizBanner } from './components/DailyQuizBanner';
import { LanguageList } from './components/LanguageList';
import { QuizConfigModal } from './components/QuizConfigModal';
import { QuizPage } from './components/QuizPage';
import { ResultsPage } from './components/ResultsPage';
import { Dashboard } from './components/Dashboard';
import { Leaderboard } from './components/Leaderboard';
import { SettingsModal } from './components/SettingsModal';
import { ContactModal } from './components/ContactModal';
import { AboutModal } from './components/AboutModal';
import { PrivacyModal } from './components/PrivacyModal';
import { KeyFeatures } from './components/KeyFeatures';
import { TestimonialsMarquee } from './components/TestimonialsMarquee';

import { CATEGORIES } from './data/categories';
import { ACHIEVEMENTS } from './data/achievements';
import { 
  getQuizQuestions, 
  getDailyQuizQuestions, 
  getQuestionById 
} from './data/questions';

import {
  getProfile,
  saveProfile,
  getSettings,
  saveSettings,
  getQuizHistory,
  addQuizHistory,
  getBookmarks,
  getUnlockedAchievements,
  unlockAchievement,
  getActiveSession,
  clearActiveSession,
  getDailyStatus,
  setDailyStatus,
  resetAllData
} from './utils/storage';

import { sound } from './utils/sound';
import { Award, RotateCcw } from 'lucide-react';

export function App() {
  // Navigation View: 'home', 'categories', 'quiz', 'results', 'dashboard', 'leaderboard'
  const [currentView, setCurrentView] = useState('home');

  // Persistent States
  const [profile, setProfile] = useState(() => getProfile());
  const [settings, setSettings] = useState(() => getSettings());
  const [history, setHistory] = useState(() => getQuizHistory());
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());
  const [achievements, setAchievements] = useState(() => getUnlockedAchievements());
  const [dailyStatus, setDailyStatusState] = useState(() => getDailyStatus());

  // Active Quiz States
  const [configuringCategory, setConfiguringCategory] = useState(null);
  const [activeQuizConfig, setActiveQuizConfig] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  // Modals
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [unlockedToast, setUnlockedToast] = useState(null);

  // Resume Session Banner
  const [resumableSession, setResumableSession] = useState(null);

  // Apply Theme & Audio Settings on initial mount
  useEffect(() => {
    const saved = getSettings();
    const activeTheme = 'light';
    saveSettings({ theme: activeTheme });
    setSettings(prev => ({ ...prev, theme: activeTheme }));
    document.documentElement.setAttribute('data-theme', activeTheme);
    sound.setEnabled(saved.soundEnabled ?? true);

    // Check if there was an active session
    const existingSession = getActiveSession();
    if (existingSession && existingSession.quizConfig) {
      setResumableSession(existingSession);
    }
  }, []);

  // Update settings handler
  const handleUpdateSettings = (newSettings) => {
    const merged = { ...settings, ...newSettings };
    setSettings(merged);
    saveSettings(merged);
  };

  // Launch Quiz from Config Modal
  const handleLaunchConfiguredQuiz = (config) => {
    const { 
      category, 
      difficulty, 
      questionCount, 
      timerSeconds, 
      mode, 
      shuffleQuestions, 
      shuffleOptions 
    } = config;

    const questions = getQuizQuestions({
      categoryId: category.id,
      difficulty,
      limit: questionCount,
      shuffleQuestions,
      shuffleOptions
    });

    setActiveQuizConfig({
      category,
      difficulty,
      timerSeconds,
      mode,
      questions
    });

    setConfiguringCategory(null);
    setResumableSession(null);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Daily Quiz
  const handleStartDailyQuiz = () => {
    const dailyQuestions = getDailyQuizQuestions();
    setActiveQuizConfig({
      category: {
        id: 'daily-challenge',
        name: 'Daily Coding Challenge',
        accentColor: '#F59E0B',
        iconName: 'Calendar'
      },
      difficulty: 'all',
      timerSeconds: 30,
      mode: 'exam',
      questions: dailyQuestions
    });

    setResumableSession(null);
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Quick Random Quiz
  const handleStartRandomQuiz = () => {
    const randomCategory = {
      id: 'random-mix',
      name: 'Random Languages Mix',
      accentColor: '#3B82F6',
      iconName: 'Shuffle',
      totalQuestions: 20
    };
    setConfiguringCategory(randomCategory);
  };

  // Practice Bookmarks Mode
  const handlePracticeBookmarks = () => {
    const savedIds = getBookmarks();
    if (savedIds.length === 0) return;

    const bookmarkedQuestions = savedIds
      .map(id => getQuestionById(id))
      .filter(Boolean);

    if (bookmarkedQuestions.length === 0) return;

    setActiveQuizConfig({
      category: {
        id: 'bookmarked-questions',
        name: 'Saved Study Bookmarks',
        accentColor: '#F59E0B',
        iconName: 'Bookmark'
      },
      difficulty: 'all',
      timerSeconds: 0,
      mode: 'practice',
      questions: bookmarkedQuestions
    });

    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Finish Quiz Handler
  const handleFinishQuiz = (resultData) => {
    // 1. Record to history & update profile stats
    const { nextProfile } = addQuizHistory({
      ...resultData,
      timestamp: Date.now()
    });

    setProfile(nextProfile);
    setHistory(getQuizHistory());
    setQuizResult(resultData);

    // 2. Mark daily status if daily challenge
    if (resultData.categoryId === 'daily-challenge') {
      const updatedDaily = { completed: true, score: resultData.scorePercentage };
      setDailyStatus(updatedDaily);
      setDailyStatusState(getDailyStatus());
    }

    // 3. Check for unlocked achievements
    ACHIEVEMENTS.forEach(badge => {
      const alreadyUnlocked = achievements.includes(badge.id);
      if (!alreadyUnlocked && badge.check(nextProfile, resultData)) {
        const nextList = unlockAchievement(badge.id);
        setAchievements(nextList);
        sound.playBadgeUnlock();
        setUnlockedToast(badge);
        setTimeout(() => setUnlockedToast(null), 4000);
      }
    });

    // 4. Navigate to results view
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume In-Progress Quiz Session
  const handleResumeSession = () => {
    if (!resumableSession) return;
    sound.playClick();
    setActiveQuizConfig(resumableSession.quizConfig);
    setResumableSession(null);
    setCurrentView('quiz');
  };

  // Discard In-Progress Quiz Session
  const handleDiscardSession = () => {
    clearActiveSession();
    setResumableSession(null);
  };

  // Reset all data
  const handleResetAllData = () => {
    resetAllData();
    setProfile(getProfile());
    setSettings(getSettings());
    setHistory([]);
    setBookmarks([]);
    setAchievements([]);
    setDailyStatusState(getDailyStatus());
    setResumableSession(null);
    setActiveQuizConfig(null);
    setQuizResult(null);
    setCurrentView('home');
  };

  return (
    <div className="app-root">
      {/* Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        profile={profile}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onOpenSettings={() => setShowSettingsModal(true)}
        onStartRandomQuiz={handleStartRandomQuiz}
        onStartDailyQuiz={handleStartDailyQuiz}
      />

      {/* Resume Session Banner */}
      {resumableSession && currentView !== 'quiz' && (
        <div className="resume-session-bar animate-fade-in">
          <div className="container resume-session-inner">
            <div className="resume-text">
              <RotateCcw size={18} className="text-primary" />
              <span>You have an in-progress <strong>{resumableSession.quizConfig?.category?.name}</strong> quiz.</span>
            </div>
            <div className="resume-actions">
              <button className="btn btn-primary btn-sm" onClick={handleResumeSession}>
                Resume Quiz
              </button>
              <button className="btn btn-ghost btn-sm" onClick={handleDiscardSession}>
                Discard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unlocked Achievement Toast Notification */}
      {unlockedToast && (
        <div className="achievement-toast animate-fade-in">
          <Award size={24} className="text-amber" />
          <div>
            <span className="toast-title">Achievement Unlocked!</span>
            <strong className="toast-name">{unlockedToast.title}</strong>
            <span className="toast-pts">+{unlockedToast.points} XP</span>
          </div>
        </div>
      )}

      {/* Main View Router */}
      <main className="main-content">
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <>
            <Hero
              onExploreLanguages={() => {
                const el = document.getElementById('explore-languages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onStartRandomQuiz={handleStartRandomQuiz}
              onStartDailyQuiz={handleStartDailyQuiz}
              onSelectCategory={(catId) => {
                const cat = CATEGORIES.find(c => c.id === catId);
                if (cat) setConfiguringCategory(cat);
              }}
            />

            <DailyQuizBanner
              onStartDailyQuiz={handleStartDailyQuiz}
              dailyStatus={dailyStatus}
            />

            <LanguageList
              profile={profile}
              onStartQuiz={(category) => setConfiguringCategory(category)}
            />

            <TestimonialsMarquee />

            <KeyFeatures />
          </>
        )}

        {/* VIEW: CATEGORIES */}
        {currentView === 'categories' && (
          <LanguageList
            profile={profile}
            onStartQuiz={(category) => setConfiguringCategory(category)}
          />
        )}

        {/* VIEW: DAILY */}
        {currentView === 'daily' && (
          <div className="container py-12">
            <DailyQuizBanner
              onStartDailyQuiz={handleStartDailyQuiz}
              dailyStatus={dailyStatus}
            />
          </div>
        )}

        {/* VIEW: QUIZ ACTIVE */}
        {currentView === 'quiz' && activeQuizConfig && (
          <QuizPage
            quizConfig={activeQuizConfig}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={() => {
              setActiveQuizConfig(null);
              setCurrentView('home');
            }}
          />
        )}

        {/* VIEW: RESULTS */}
        {currentView === 'results' && quizResult && (
          <ResultsPage
            result={quizResult}
            onRetryQuiz={() => {
              if (quizResult.quizConfig) {
                handleLaunchConfiguredQuiz(quizResult.quizConfig);
              } else {
                setCurrentView('home');
              }
            }}
            onChooseAnother={() => setCurrentView('categories')}
            onGoHome={() => setCurrentView('home')}
          />
        )}

        {/* VIEW: DASHBOARD */}
        {currentView === 'dashboard' && (
          <Dashboard
            profile={profile}
            history={history}
            bookmarks={bookmarks}
            achievements={achievements}
            onStartQuizWithCategory={(catId) => {
              const cat = CATEGORIES.find(c => c.id === catId);
              if (cat) setConfiguringCategory(cat);
            }}
            onPracticeBookmarks={handlePracticeBookmarks}
          />
        )}

        {/* VIEW: LEADERBOARD */}
        {currentView === 'leaderboard' && (
          <Leaderboard
            profile={profile}
            history={history}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          sound.playClick();
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAbout={() => setShowAboutModal(true)}
        onOpenPrivacy={() => setShowPrivacyModal(true)}
        onOpenContact={() => setShowContactModal(true)}
      />

      {/* Modal Dialogs */}
      {configuringCategory && (
        <QuizConfigModal
          category={configuringCategory}
          initialSettings={settings}
          onClose={() => setConfiguringCategory(null)}
          onLaunchQuiz={handleLaunchConfiguredQuiz}
        />
      )}

      {showSettingsModal && (
        <SettingsModal
          settings={settings}
          profile={profile}
          onSaveSettings={(s) => setSettings(s)}
          onUpdateProfile={(p) => setProfile(saveProfile(p))}
          onResetData={handleResetAllData}
          onClose={() => setShowSettingsModal(false)}
        />
      )}

      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}

      {showAboutModal && (
        <AboutModal onClose={() => setShowAboutModal(false)} />
      )}

      {showPrivacyModal && (
        <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
      )}
    </div>
  );
}

export default App;
