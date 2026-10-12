export const ACHIEVEMENTS = [
  {
    id: 'first-quiz',
    title: 'Hello, World!',
    description: 'Complete your first programming quiz on CodeMaster.',
    icon: 'Sparkles',
    category: 'milestone',
    points: 50,
    check: (stats) => (stats.quizzesCompleted || 0) >= 1
  },
  {
    id: 'perfect-score',
    title: 'Flawless Victory',
    description: 'Score 100% on any quiz.',
    icon: 'Award',
    category: 'skill',
    points: 100,
    check: (stats) => (stats.perfectScores || 0) >= 1
  },
  {
    id: 'quiz-veteran',
    title: 'Quiz Veteran',
    description: 'Successfully complete 10 programming quizzes.',
    icon: 'Trophy',
    category: 'milestone',
    points: 150,
    check: (stats) => (stats.quizzesCompleted || 0) >= 10
  },
  {
    id: 'polyglot',
    title: 'Polyglot Programmer',
    description: 'Test your knowledge across at least 5 different categories.',
    icon: 'Globe',
    category: 'exploration',
    points: 120,
    check: (stats) => Object.keys(stats.categoryAttempts || {}).length >= 5
  },
  {
    id: 'python-pro',
    title: 'Pythonista Pro',
    description: 'Complete a Python quiz with 80% or higher score.',
    icon: 'Code2',
    category: 'language',
    points: 80,
    check: (stats, latestQuiz) => latestQuiz && latestQuiz.categoryId === 'python' && latestQuiz.scorePercentage >= 80
  },
  {
    id: 'java-master',
    title: 'Java Master',
    description: 'Complete a Java quiz with 80% or higher score.',
    icon: 'Coffee',
    category: 'language',
    points: 80,
    check: (stats, latestQuiz) => latestQuiz && latestQuiz.categoryId === 'java' && latestQuiz.scorePercentage >= 80
  },
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Finish a quiz with at least 80% score in under 60 seconds.',
    icon: 'Zap',
    category: 'skill',
    points: 100,
    check: (stats, latestQuiz) => latestQuiz && latestQuiz.scorePercentage >= 80 && latestQuiz.timeTakenSeconds <= 60 && latestQuiz.totalQuestions >= 5
  },
  {
    id: 'hardcore-coder',
    title: 'Hardcore Coder',
    description: 'Conquer any Hard difficulty quiz with at least 80% score.',
    icon: 'Flame',
    category: 'skill',
    points: 120,
    check: (stats, latestQuiz) => latestQuiz && latestQuiz.difficulty === 'hard' && latestQuiz.scorePercentage >= 80
  },
  {
    id: 'streak-master',
    title: 'Streak Master',
    description: 'Maintain a 3-day daily quiz streak.',
    icon: 'TrendingUp',
    category: 'streak',
    points: 90,
    check: (stats) => (stats.currentStreak || 0) >= 3
  },
  {
    id: 'coding-champion',
    title: 'Coding Champion',
    description: 'Accumulate over 500 total XP points across quizzes.',
    icon: 'Crown',
    category: 'mastery',
    points: 200,
    check: (stats) => (stats.totalXp || 0) >= 500
  }
];
