const STORAGE_KEYS = {
  PROFILE: 'codemaster_profile',
  HISTORY: 'codemaster_history',
  BOOKMARKS: 'codemaster_bookmarks',
  ACHIEVEMENTS: 'codemaster_achievements',
  SETTINGS: 'codemaster_settings',
  ACTIVE_SESSION: 'codemaster_active_session',
  DAILY_STATUS: 'codemaster_daily_status',
  USER: 'codemaster_user'
};

const DEFAULT_PROFILE = {
  nickname: 'Coder_101',
  avatar: 'terminal',
  totalXp: 0,
  quizzesCompleted: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  perfectScores: 0,
  currentStreak: 1,
  highestStreak: 1,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  categoryAttempts: {}, // { java: { attempted: 2, bestScore: 90, totalCorrect: 18 } }
  joinedDate: new Date().toISOString().slice(0, 10)
};

const DEFAULT_SETTINGS = {
  theme: 'light',
  soundEnabled: true,
  defaultTimer: 30, // seconds per question, 0 = no timer
  defaultQuestions: 10,
  practiceMode: false
};

// Safe localStorage wrapper
function getItem(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setItem(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {}
}

export function getProfile() {
  const profile = getItem(STORAGE_KEYS.PROFILE, DEFAULT_PROFILE);
  return checkAndUpdateStreak(profile);
}

export function saveProfile(updates) {
  const current = getProfile();
  const next = { ...current, ...updates };
  setItem(STORAGE_KEYS.PROFILE, next);
  return next;
}

function checkAndUpdateStreak(profile) {
  const today = new Date().toISOString().slice(0, 10);
  const lastDate = profile.lastActiveDate;

  if (lastDate === today) {
    return profile;
  }

  // Calculate day difference
  const prev = new Date(lastDate);
  const cur = new Date(today);
  const diffDays = Math.round((cur - prev) / (1000 * 60 * 60 * 24));

  let newStreak = profile.currentStreak || 1;
  if (diffDays === 1) {
    // Continued streak yesterday
    newStreak += 1;
  } else if (diffDays > 1) {
    // Broke streak
    newStreak = 1;
  }

  const updated = {
    ...profile,
    currentStreak: newStreak,
    highestStreak: Math.max(profile.highestStreak || 1, newStreak),
    lastActiveDate: today
  };
  setItem(STORAGE_KEYS.PROFILE, updated);
  return updated;
}

export function getSettings() {
  return getItem(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
}

export function saveSettings(settings) {
  setItem(STORAGE_KEYS.SETTINGS, settings);
}

export function getQuizHistory() {
  return getItem(STORAGE_KEYS.HISTORY, []);
}

export function addQuizHistory(quizRecord) {
  const history = getQuizHistory();
  const updated = [quizRecord, ...history].slice(0, 50); // Keep last 50
  setItem(STORAGE_KEYS.HISTORY, updated);

  // Update profile metrics
  const profile = getProfile();
  const categoryAttempts = { ...(profile.categoryAttempts || {}) };
  const cat = quizRecord.categoryId;
  const prevCat = categoryAttempts[cat] || { attempts: 0, bestScore: 0, totalCorrect: 0, totalQuestions: 0 };

  categoryAttempts[cat] = {
    attempts: prevCat.attempts + 1,
    bestScore: Math.max(prevCat.bestScore, quizRecord.scorePercentage),
    totalCorrect: prevCat.totalCorrect + quizRecord.correctCount,
    totalQuestions: prevCat.totalQuestions + quizRecord.totalQuestions
  };

  const xpEarned = Math.round(quizRecord.scorePercentage * 2 + quizRecord.correctCount * 10);
  const isPerfect = quizRecord.scorePercentage === 100;

  const nextProfile = {
    ...profile,
    quizzesCompleted: (profile.quizzesCompleted || 0) + 1,
    totalCorrect: (profile.totalCorrect || 0) + quizRecord.correctCount,
    totalAnswered: (profile.totalAnswered || 0) + quizRecord.totalQuestions,
    totalXp: (profile.totalXp || 0) + xpEarned,
    perfectScores: (profile.perfectScores || 0) + (isPerfect ? 1 : 0),
    categoryAttempts
  };

  saveProfile(nextProfile);
  return { nextProfile, xpEarned };
}

export function getBookmarks() {
  return getItem(STORAGE_KEYS.BOOKMARKS, []);
}

export function toggleBookmark(questionId) {
  const current = getBookmarks();
  let updated;
  if (current.includes(questionId)) {
    updated = current.filter(id => id !== questionId);
  } else {
    updated = [...current, questionId];
  }
  setItem(STORAGE_KEYS.BOOKMARKS, updated);
  return updated;
}

export function isBookmarked(questionId) {
  const bookmarks = getBookmarks();
  return bookmarks.includes(questionId);
}

export function getUnlockedAchievements() {
  return getItem(STORAGE_KEYS.ACHIEVEMENTS, []);
}

export function unlockAchievement(achievementId) {
  const current = getUnlockedAchievements();
  if (!current.includes(achievementId)) {
    const next = [...current, achievementId];
    setItem(STORAGE_KEYS.ACHIEVEMENTS, next);
    return next;
  }
  return current;
}

export function saveActiveSession(sessionState) {
  if (!sessionState) {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  } else {
    setItem(STORAGE_KEYS.ACTIVE_SESSION, sessionState);
  }
}

export function getActiveSession() {
  return getItem(STORAGE_KEYS.ACTIVE_SESSION, null);
}

export function clearActiveSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
  } catch {}
}

export function getDailyStatus() {
  const today = new Date().toISOString().slice(0, 10);
  const status = getItem(STORAGE_KEYS.DAILY_STATUS, { date: today, completed: false, score: 0 });
  if (status.date !== today) {
    return { date: today, completed: false, score: 0 };
  }
  return status;
}

export function setDailyStatus(data) {
  const today = new Date().toISOString().slice(0, 10);
  setItem(STORAGE_KEYS.DAILY_STATUS, { ...data, date: today });
}

export function getUser() {
  return getItem(STORAGE_KEYS.USER, null);
}

export function saveUser(user) {
  setItem(STORAGE_KEYS.USER, user);
  return user;
}

export function clearUser() {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER);
  } catch {}
}

export function resetAllData() {
  Object.values(STORAGE_KEYS).forEach(k => {
    try {
      localStorage.removeItem(k);
    } catch {}
  });
}

