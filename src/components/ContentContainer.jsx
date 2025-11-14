import { useState } from 'react';
import GradientCard from './GradientCard';

function ContentContainer({ 
  title = "Explore all content",
  tabs = ["Lessons", "Collections", "Applications"],
  activeTab = "Lessons",
  onTabChange,
  resultsCount = 108,
  totalResults = 108,
  cards = [],
  onCodeClick
}) {
  const [currentPage, setCurrentPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleTabClick = (tab) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, totalResults);

  return (
    <div 
      className="rounded-2xl p-4 md:p-8 flex flex-col gap-4 w-full mx-auto"
      style={{
        backgroundColor: 'transparent' // Background is handled by parent
      }}
    >
      {/* Title */}
      <h1 className="font-medium text-xl leading-6 text-slate-50">
        {title}
      </h1>

      {/* Tabs */}
      <div className="flex gap-8 items-start border-b border-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-2 px-0 font-medium text-sm leading-5 transition-colors duration-200 ${
              activeTab === tab
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-2 w-full">
        {/* Results count and filters row */}
        <div className="flex items-center justify-between w-full">
          {/* Results count */}
          <p className="text-slate-400 text-sm">
            Showing {resultsCount} of {totalResults} results
          </p>

          {/* Filter buttons */}
          <div className="flex gap-3 items-center">
            {/* Search button */}
            <button className="bg-slate-900 border border-slate-800 rounded-lg h-9 px-3 flex items-center justify-center hover:border-slate-700 transition-colors">
              <svg 
                className="w-3 h-3 text-slate-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>

            {/* Type filter */}
            <button className="bg-slate-900 border border-slate-800 rounded-lg h-9 px-3 flex items-center gap-2 text-slate-400 text-sm font-medium hover:border-slate-700 transition-colors">
              <span>Type</span>
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>

            {/* Subject filter */}
            <button className="bg-slate-900 border border-slate-800 rounded-lg h-9 px-3 flex items-center gap-2 text-slate-400 text-sm font-medium hover:border-slate-700 transition-colors">
              <span>Subject</span>
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>

            {/* Application filter */}
            <button className="bg-slate-900 border border-slate-800 rounded-lg h-9 px-3 flex items-center gap-2 text-slate-400 text-sm font-medium hover:border-slate-700 transition-colors">
              <span>Application</span>
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>

            {/* Sort button */}
            <button className="bg-slate-900 border border-slate-800 rounded-lg h-9 px-3 flex items-center gap-2 text-slate-400 text-sm font-medium hover:border-slate-700 transition-colors">
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
                />
              </svg>
              <span>Sort</span>
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-2 w-full">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <GradientCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                badge={card.badge}
                tags={card.tags}
                extraTagsCount={card.extraTagsCount}
                imageUrl={card.imageUrl}
                onCodeClick={onCodeClick}
              />
            ))
          ) : (
            // Default example card
            <GradientCard
              title="Visible Body+: Investigating the Skeletal System"
              subtitle="Advanced Manufacturing Mechanical | StudioA3 | Advanced Manufacturing Hydraulics +3 others"
              badge="Lesson"
              tags={["Life Science", "Architecture and Construction", "Agriculture, Food and Natural Resources"]}
              extraTagsCount={3}
              onCodeClick={onCodeClick}
            />
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-start justify-between w-full mt-4">
        {/* Rows per page */}
        <div className="flex items-center gap-2.5">
          <p className="text-slate-400 text-sm text-right">Rows per page</p>
          <div className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-2 flex items-center w-16">
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="flex-1 bg-transparent text-slate-200 text-sm outline-none appearance-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <svg 
              className="w-2.5 h-2.5 text-slate-400 pointer-events-none" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
          <p className="text-slate-400 text-sm">
            {startIndex}-{endIndex} of {totalResults}
          </p>
        </div>

        {/* Page numbers */}
        <div className="border border-slate-800 rounded h-8 flex items-center overflow-hidden">
          {/* Previous button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="bg-slate-900 border-r border-slate-800 h-full px-3 flex items-center justify-center hover:bg-slate-800 transition-colors"
            disabled={currentPage === 1}
          >
            <svg 
              className="w-3 h-3 text-slate-50" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          {/* Page 1 */}
          <button
            onClick={() => setCurrentPage(1)}
            className={`h-full px-3 flex items-center justify-center text-sm transition-colors ${
              currentPage === 1
                ? 'bg-slate-800 text-slate-50'
                : 'bg-slate-900 text-gray-500 hover:bg-slate-800'
            }`}
          >
            1
          </button>

          {/* Page 2 */}
          <button
            onClick={() => setCurrentPage(2)}
            className={`h-full px-3 flex items-center justify-center text-sm transition-colors border-l border-r border-slate-800 ${
              currentPage === 2
                ? 'bg-blue-950 text-blue-400'
                : 'bg-slate-900 text-gray-500 hover:bg-slate-800'
            }`}
          >
            2
          </button>

          {/* Page 3 */}
          <button
            onClick={() => setCurrentPage(3)}
            className={`h-full px-3 flex items-center justify-center text-sm transition-colors border-r border-slate-800 ${
              currentPage === 3
                ? 'bg-slate-800 text-slate-50'
                : 'bg-slate-900 text-gray-500 hover:bg-slate-800'
            }`}
          >
            3
          </button>

          {/* Ellipsis */}
          <div className="h-full px-3 flex items-center justify-center bg-slate-900 border-r border-slate-800">
            <span className="text-gray-500 text-sm">...</span>
          </div>

          {/* Last page */}
          <button
            onClick={() => setCurrentPage(100)}
            className={`h-full px-3 flex items-center justify-center text-sm transition-colors border-r border-slate-800 ${
              currentPage === 100
                ? 'bg-slate-800 text-slate-50'
                : 'bg-slate-900 text-gray-500 hover:bg-slate-800'
            }`}
          >
            100
          </button>

          {/* Next button */}
          <button
            onClick={() => setCurrentPage(Math.min(100, currentPage + 1))}
            className="bg-slate-900 h-full px-3 flex items-center justify-center hover:bg-slate-800 transition-colors"
            disabled={currentPage === 100}
          >
            <svg 
              className="w-3 h-3 text-slate-50" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;

