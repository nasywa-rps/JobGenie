import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCard = ({
  title,
  steps,
  imageUrl,
  imageAlt,
  buttonText = "Mulai Pencarian"
}) => {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 transform transition-all duration-500 hover:scale-[1.03]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Main Image */}
              <div className="relative pb-[56.25%]">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-800/30 to-transparent opacity-80 mix-blend-multiply"></div>
              </div>

              {/* Overlay with Button */}
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-gradient-to-t from-black/90 to-transparent p-6">
                  <button
                    onClick={() => navigate('/jobform')}
                    className="w-full flex items-center justify-between bg-amber-500 hover:bg-amber-600 text-white font-medium py-3.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl group/btn"
                  >
                    <span className="text-lg font-semibold">{buttonText}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform group-hover/btn:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400 rounded-bl-3xl transform -translate-y-1/2 translate-x-1/2 rotate-45 opacity-80 blur-lg"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 relative inline-block">
              {title}
              <span className="absolute -bottom-3 left-0 w-2/5 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full"></span>
            </h2>
            <ol className="space-y-8">
              {steps.map((step, index) => (
                <li key={index} className="flex group/step">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 font-bold border-2 border-emerald-200 shadow-md transition-all duration-300 group-hover/step:bg-emerald-600 group-hover/step:text-white group-hover/step:border-emerald-500 group-hover/step:scale-110">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-5 pt-1.5">
                    <p className="text-lg text-gray-700 group-hover/step:text-gray-900 transition-colors duration-300">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
