import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, CATEGORY_FILTERS } from '../data/categories';
import { LanguageCard } from './LanguageCard';
import { sound } from '../utils/sound';

export function LanguageList({ onStartQuiz, profile }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState('all');
  const [completionFilter, setCompletionFilter] = useState('all'); // 'all', 'completed', 'uncompleted'

  const userAttempts = profile?.categoryAttempts || {};

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter(cat => {
      // Search query filter
      const matchesSearch = 
        cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      // Group filter
      if (activeGroup === 'popular' && !cat.popular) return false;
      if (activeGroup !== 'all' && activeGroup !== 'popular' && cat.categoryGroup !== activeGroup) return false;

      // Completion filter
      const hasAttempted = (userAttempts[cat.id]?.attempts || 0) > 0;
      if (completionFilter === 'completed' && !hasAttempted) return false;
      if (completionFilter === 'uncompleted' && hasAttempted) return false;

      return true;
    });
  }, [searchQuery, activeGroup, completionFilter, userAttempts]);

  const clearAllFilters = () => {
    sound.playClick();
    setSearchQuery('');
    setActiveGroup('all');
    setCompletionFilter('all');
  };

  return (
    <section className="explore-section" id="explore-languages">
      <div className="container">
        {/* Section Header - Matching Available Courses in Reference Image */}
        <div className="section-header-left">
          <h2 className="section-title-left">Available Courses</h2>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="filter-toolbar">
          {/* Search Input */}
          <div className="search-bar-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search Python, Java, React, SQL, Algorithms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Completion Status Filter Dropdown/Pills */}
          <div className="filter-status-group">
            <button
              className={`status-pill ${completionFilter === 'all' ? 'status-pill-active' : ''}`}
              onClick={() => {
                sound.playClick();
                setCompletionFilter('all');
              }}
            >
              All Quizzes
            </button>
            <button
              className={`status-pill ${completionFilter === 'completed' ? 'status-pill-active' : ''}`}
              onClick={() => {
                sound.playClick();
                setCompletionFilter('completed');
              }}
            >
              <CheckCircle2 size={14} /> Attempted
            </button>
            <button
              className={`status-pill ${completionFilter === 'uncompleted' ? 'status-pill-active' : ''}`}
              onClick={() => {
                sound.playClick();
                setCompletionFilter('uncompleted');
              }}
            >
              Uncompleted
            </button>
          </div>
        </div>

        {/* Category Group Tabs */}
        <div className="category-tabs-scroll">
          <div className="category-tabs">
            {CATEGORY_FILTERS.map(filter => (
              <button
                key={filter.id}
                className={`category-tab-btn ${activeGroup === filter.id ? 'category-tab-active' : ''}`}
                onClick={() => {
                  sound.playClick();
                  setActiveGroup(filter.id);
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="results-meta-bar">
          <span className="results-count">
            Showing <strong>{filteredCategories.length}</strong> of {CATEGORIES.length} Categories
          </span>
          {(searchQuery || activeGroup !== 'all' || completionFilter !== 'all') && (
            <button className="btn-ghost btn-sm text-primary" onClick={clearAllFilters}>
              Reset Filters
            </button>
          )}
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="languages-grid">
            {filteredCategories.map(cat => (
              <LanguageCard
                key={cat.id}
                category={cat}
                onStartQuiz={onStartQuiz}
                userAttempts={userAttempts[cat.id]}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="empty-state-box glass-panel animate-fade-in">
            <Filter size={48} className="empty-icon text-muted" />
            <h3 className="empty-title">No categories found</h3>
            <p className="empty-desc">
              We couldn't find any programming languages matching &ldquo;<strong>{searchQuery}</strong>&rdquo; with current filters.
            </p>
            <button className="btn btn-primary" onClick={clearAllFilters}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
