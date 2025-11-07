import { useState } from 'react';
import LaunchButton from './LaunchButton';

const img = "https://www.figma.com/api/mcp/asset/1c682656-43ca-4dd8-9a58-cd84297c4564";
const imgStudio = "https://www.figma.com/api/mcp/asset/d52ebc9d-bfba-479c-a2a2-414d065dc146";
const img1 = "https://www.figma.com/api/mcp/asset/c9a5457a-1b76-4b15-90b4-5a89584c0e1f";
const img2 = "https://www.figma.com/api/mcp/asset/7fecfad9-d866-4605-a7f2-ba22f1e0371b";
const img3 = "https://www.figma.com/api/mcp/asset/7633920a-1373-414d-bc76-f0fe4d842307";
const img4 = "https://www.figma.com/api/mcp/asset/23e2e915-39c4-494b-b638-d262ff2ef49f";
const img5 = "https://www.figma.com/api/mcp/asset/b6e29334-bb76-41e6-b034-8560b57aff12";
const img6 = "https://www.figma.com/api/mcp/asset/7c1f0df5-e5cd-4a2a-b149-093d472566a9";
const img7 = "https://www.figma.com/api/mcp/asset/a33af4c0-4e5c-4f06-9613-3b8c1b1ef49f";
const img8 = "https://www.figma.com/api/mcp/asset/1b0ec207-64d1-4ce7-bf01-5b38c5d33256";

const relatedLessons = [
  "What is Magnetism?",
  "Work Done By a Variable Force",
  "7: Scientific Method Challenge",
  "Mammal Characteristics",
  "Manometers",
  "Electrician for a Day",
  "Story Starter: The Ancient Hero",
  "Hydraulic Lift",
  "Patterns of the Sun, Earth, and Moon",
  "Project: Torus Cage"
];

const appChoices = [
  "Virtual ECG",
  "Visible Body+"
];

export default function SidePeek({ isDarkMode = false }) {
  const [hoveredLesson, setHoveredLesson] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonClick = (index) => {
    setSelectedLesson(index);
  };

  const handleBack = () => {
    setSelectedLesson(null);
  };

  // Helper function for dark mode classes
  const dark = (lightClass, darkClass) => isDarkMode ? darkClass : lightClass;

  return (
    <div className={`relative shadow-lg w-full max-w-md min-w-[400px] h-[90vh] overflow-hidden transition-colors duration-300 ${
      dark('bg-white border-l-2 border-gray-300', 'bg-gray-900 border-l-2 border-gray-700')
    }`}>
      {/* Application View */}
      <div
        className={`absolute inset-0 flex flex-col gap-3 items-start px-6 py-4 overflow-y-auto transition-all duration-300 ease-out z-10 ${
          dark('bg-white', 'bg-gray-900')
        } ${
          selectedLesson !== null ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex gap-3 items-center w-full">
          <div className="bg-[#effbf3] border border-[#7cde9d] flex gap-1 items-center justify-center px-2 py-1 rounded-full">
            <p className={`font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Application</p>
          </div>
          <div className={`${dark('bg-[#fafafa] border-gray-300', 'bg-gray-800 border-gray-700')} border flex gap-1 items-center justify-center px-2 py-1 rounded-full`}>
            <p className={`font-mono font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>A045</p>
          </div>
          <div className="flex flex-1 gap-2 items-center justify-end">
            <button className={`w-5 h-5 flex items-center justify-center ${dark('hover:bg-gray-100', 'hover:bg-gray-800')} rounded transition-colors cursor-pointer`}>
              <svg className={`w-4 h-4 ${dark('text-gray-700 hover:text-gray-900', 'text-gray-400 hover:text-gray-200')} transition-colors`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </button>
            <button className={`w-5 h-5 flex items-center justify-center ${dark('hover:bg-gray-100', 'hover:bg-gray-800')} rounded transition-colors cursor-pointer`}>
              <svg className={`w-4 h-4 ${dark('text-gray-700 hover:text-gray-900', 'text-gray-400 hover:text-gray-200')} transition-colors`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 items-start w-full flex-1">
          <div className="flex flex-col gap-4 items-start w-full">
            {/* App Icon and Title */}
            <div className="flex gap-2 items-start w-full">
              <div className="relative w-6 h-6 shrink-0">
                <img alt="Virtual ECG" className="block w-full h-full object-cover" src={img} />
              </div>
              <p className={`font-medium text-base ${dark('text-[#00327a]', 'text-violet-400')}`}>
                Virtual ECG
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col gap-2 items-start w-full">
              <LaunchButton 
                onClick={() => {}}
                variant="fullWidth"
              />
              <button className={`${dark('bg-white hover:bg-gray-50 border-gray-300', 'bg-gray-800 hover:bg-gray-700 border-gray-700')} border flex gap-2 items-center justify-center px-3 py-2 rounded-full w-full transition-colors cursor-pointer`}>
                <p className={`font-medium text-xs ${dark('text-[#0a0a0a]', 'text-gray-200')}`}>App details</p>
                <svg className={`w-3 h-3 ${dark('text-[#0a0a0a]', 'text-gray-200')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-col gap-2 items-start w-full flex-1">
            <div className={`border-b ${dark('border-gray-300', 'border-gray-700')} flex gap-8 items-start w-full`}>
              <button className={`border-b-2 ${dark('border-[#0072ce] hover:border-[#005a9e]', 'border-violet-500 hover:border-violet-400')} flex flex-col gap-2.5 items-center pb-2 transition-colors cursor-pointer`}>
                <p className={`font-medium text-sm ${dark('text-[#003d94]', 'text-violet-400')} text-center`}>Related lessons</p>
              </button>
              <button className={`flex flex-col items-center justify-center pb-2 rounded-md ${dark('hover:text-[#363636]', 'hover:text-gray-300')} transition-colors cursor-pointer`}>
                <p className={`font-medium text-sm ${dark('text-[#5e5e5e]', 'text-gray-400')}`}>Resources</p>
              </button>
            </div>

            {/* Related Lessons List */}
            <div className="flex flex-col gap-0 items-start w-full">
              {relatedLessons.map((lesson, index) => (
                <button
                  key={index}
                  onClick={() => handleLessonClick(index)}
                  className={`relative flex items-center px-0 py-3 w-full rounded transition-all duration-300 ease-out text-left ${
                    hoveredLesson === index 
                      ? dark('bg-gray-50 border-gray-300', 'bg-gray-800 border-gray-700') + ' border'
                      : dark('hover:bg-gray-50 border-transparent', 'hover:bg-gray-800 border-transparent') + ' border'
                  }`}
                  onMouseEnter={() => setHoveredLesson(index)}
                  onMouseLeave={() => setHoveredLesson(null)}
                >
                  {/* Lesson name with underline animation and arrow */}
                  <div className="flex flex-1 items-center min-w-0 gap-2">
                    <span className="relative inline-block pb-0.5 min-w-0">
                      <span className={`block truncate font-normal text-sm ${dark('text-black', 'text-gray-200')}`}>{lesson}</span>
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 ${dark('bg-[#00327a]', 'bg-violet-400')} transition-all duration-300 ease-out ${
                          hoveredLesson === index ? 'w-full' : 'w-0'
                        }`}
                      ></span>
                    </span>
                    {/* Arrow icon - appears after underline completes (300ms delay) */}
                    <div 
                      className={`flex items-center shrink-0 transition-all duration-200 ${
                        hoveredLesson === index 
                          ? 'opacity-100 translate-x-0 delay-300' 
                          : 'opacity-0 -translate-x-2 delay-0'
                      }`}
                    >
                      <svg className={`w-4 h-4 ${dark('text-[#00327a]', 'text-violet-400')}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {/* Code badge with minimum 16px padding from arrow */}
                  <div className="flex gap-2 items-center shrink-0 ml-4">
                    <div className={`${dark('bg-[#fafafa] border-gray-300', 'bg-gray-800 border-gray-700')} border flex gap-1 items-center justify-center px-2 py-1 rounded-full`}>
                      <p className={`font-mono font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>A045</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Detail View - Slides in from right */}
      <div
        className={`absolute inset-0 flex flex-col gap-3 items-start px-6 py-4 overflow-y-auto transition-all duration-300 ease-out z-20 ${
          dark('bg-white', 'bg-gray-900')
        } ${
          selectedLesson !== null ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedLesson !== null && (
          <>
            {/* Header with Back Arrow */}
            <div className="flex gap-3 items-center w-full">
              <button
                onClick={handleBack}
                className={`w-5 h-5 flex items-center justify-center ${dark('hover:bg-gray-100', 'hover:bg-gray-800')} rounded transition-colors cursor-pointer shrink-0`}
              >
                <svg className={`w-4 h-4 ${dark('text-gray-700 hover:text-gray-900', 'text-gray-400 hover:text-gray-200')} transition-colors`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
            <div className="bg-[#effbf3] border border-[#7cde9d] flex gap-1 items-center justify-center px-2 py-1 rounded-full">
              <p className={`font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Lesson</p>
            </div>
            <div className={`${dark('bg-[#fafafa] border-gray-300', 'bg-gray-800 border-gray-700')} border flex gap-1 items-center justify-center px-2 py-1 rounded-full`}>
              <p className={`font-mono font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>A045</p>
            </div>
            <div className="flex flex-1 gap-2 items-center justify-end">
              <button className={`w-5 h-5 flex items-center justify-center ${dark('hover:bg-gray-100', 'hover:bg-gray-800')} rounded transition-colors cursor-pointer`}>
                <svg className={`w-4 h-4 ${dark('text-gray-700 hover:text-gray-900', 'text-gray-400 hover:text-gray-200')} transition-colors`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </button>
            <button className={`w-5 h-5 flex items-center justify-center ${dark('hover:bg-gray-100', 'hover:bg-gray-800')} rounded transition-colors cursor-pointer`}>
              <svg className={`w-4 h-4 ${dark('text-gray-700 hover:text-gray-900', 'text-gray-400 hover:text-gray-200')} transition-colors`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="flex flex-col gap-8 items-start w-full flex-1">
            <div className="flex flex-col gap-4 items-start w-full">
              <p className={`font-medium text-base ${dark('text-[#00327a]', 'text-violet-400')} w-full`}>
                {relatedLessons[selectedLesson]}
              </p>
              
              <div className="flex flex-col gap-2 items-start w-full">
              <LaunchButton 
                onClick={() => {}}
                variant="fullWidth"
              />
                <div className="flex gap-1 items-center px-0 py-1 w-full">
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-3 relative">
                      <img alt="" className="block w-full h-full" src={imgStudio} />
                    </div>
                    <p className={`text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Studio A3</p>
                  </div>
                  <p className={`text-xs ${dark('text-[#242424]', 'text-gray-500')}`}>|</p>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-3 relative">
                      <img alt="" className="block w-full h-full" src={imgStudio} />
                    </div>
                    <p className={`text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Studio A3</p>
                  </div>
                  <p className={`text-xs ${dark('text-[#242424]', 'text-gray-500')}`}>|</p>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-3 relative">
                      <img alt="" className="block w-full h-full" src={imgStudio} />
                    </div>
                    <p className={`text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Studio A3</p>
                  </div>
                  <p className={`flex-1 font-medium text-xs ${dark('text-[#242424]', 'text-gray-400')}`}>+3 others</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 items-center w-full">
              <div className={`${dark('bg-[#f5f5f5] border-gray-300', 'bg-gray-800 border-gray-700')} border flex gap-1 items-center px-2 py-1 rounded-full`}>
                <div className="w-3 h-3 relative">
                  <img alt="" className="block w-full h-full" src={img5} />
                </div>
                <p className={`font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Agriculture, Food and Natural Resources</p>
              </div>
              <div className={`${dark('bg-[#f5f5f5] border-gray-300', 'bg-gray-800 border-gray-700')} border flex gap-1 items-center px-2 py-1 rounded-full`}>
                <div className="w-3 h-3 relative">
                  <img alt="" className="block w-full h-full" src={img5} />
                </div>
                <p className={`font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Life Science</p>
              </div>
              <div className={`${dark('bg-[#f5f5f5] border-gray-300', 'bg-gray-800 border-gray-700')} border flex gap-1 items-center px-2 py-1 rounded-full`}>
                <div className="w-3 h-3 relative">
                  <img alt="" className="block w-full h-full" src={img5} />
                </div>
                <p className={`font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>Architecture and Construction</p>
              </div>
              <div className={`${dark('bg-[#f5f5f5] border-gray-300', 'bg-gray-800 border-gray-700')} border flex gap-1 items-center px-2 py-1 rounded-full`}>
                <p className={`font-medium text-xs ${dark('text-[#363636]', 'text-gray-300')}`}>+3</p>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 items-start w-full">
              <p className={`text-sm ${dark('text-[#5e5e5e]', 'text-gray-400')} w-full`}>
                Students will explore ants in two different environments - dining room and forest. In this activity, students will learn the various functionality of this app while learning the basics about how ants forage for food. They will also be challenged to collect as much food as possible within a time limit, using knowledge they gain about pheromone trails and obstacles.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-col gap-2 items-start w-full">
              <div className={`border-b ${dark('border-gray-300', 'border-gray-700')} flex gap-8 items-start w-full`}>
                <button className={`border-b-2 ${dark('border-[#0072ce]', 'border-violet-500')} flex flex-col gap-2.5 items-center pb-2`}>
                  <p className={`font-medium text-sm ${dark('text-[#003d94]', 'text-violet-400')} text-center`}>Assets</p>
                </button>
                <button className="flex flex-col items-center justify-center pb-2">
                <p className={`font-medium text-sm ${dark('text-[#5e5e5e]', 'text-gray-400')}`}>Standards</p>
              </button>
              <button className="flex flex-col items-center justify-center pb-2 rounded-md">
                <p className={`font-medium text-sm ${dark('text-[#5e5e5e]', 'text-gray-400')}`}>Resources</p>
              </button>
              </div>

              {/* Files */}
              <div className={`${dark('bg-[#fafafa]', 'bg-gray-800')} flex gap-4 items-center p-2 rounded-lg w-full`}>
                <div className="flex flex-1 flex-col gap-2 items-start justify-center">
                  <div className="flex gap-2 items-center w-full">
                    <svg className={`w-4 h-4 ${dark('text-[#0a0a0a]', 'text-gray-200')}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <p className={`flex-1 font-medium text-sm ${dark('text-[#363636]', 'text-gray-300')}`}>Worksheet: {relatedLessons[selectedLesson]}</p>
                  </div>
                </div>
                <svg className={`w-4 h-4 ${dark('text-[#5e5e5e]', 'text-gray-400')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                  <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 100-2h-2v2z" />
                </svg>
                <svg className={`w-4 h-4 ${dark('text-[#5e5e5e]', 'text-gray-400')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <svg className={`w-4 h-4 ${dark('text-[#5e5e5e]', 'text-gray-400')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
              </div>

              <div className={`${dark('bg-[#fafafa]', 'bg-gray-800')} flex gap-4 items-center p-2 rounded-lg w-full`}>
                <div className="flex flex-1 flex-col gap-2 items-start justify-center">
                  <div className="flex gap-2 items-center w-full">
                    <svg className={`w-4 h-4 ${dark('text-[#0a0a0a]', 'text-gray-200')}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <p className={`flex-1 font-medium text-sm ${dark('text-[#363636]', 'text-gray-300')}`}>Lesson plan: {relatedLessons[selectedLesson]}</p>
                  </div>
                </div>
                <svg className={`w-4 h-4 ${dark('text-[#5e5e5e]', 'text-gray-400')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                  <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 100-2h-2v2z" />
                </svg>
                <svg className={`w-4 h-4 ${dark('text-[#5e5e5e]', 'text-gray-400')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <svg className={`w-4 h-4 ${dark('text-[#5e5e5e]', 'text-gray-400')}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
}
