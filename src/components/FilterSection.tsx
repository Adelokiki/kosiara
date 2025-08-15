import React from 'react';

interface FilterSectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  showAvailable: boolean;
  onAvailabilityChange: (show: boolean) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedCategory,
  onCategoryChange,
  showAvailable,
  onAvailabilityChange
}) => {
  const categories = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bangles', 'Waistbeads'];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-[#F6D1C1]/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 border-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-[#F6D1C1] bg-[#F6D1C1] text-[#0D1B2A]'
                    : 'border-[#F6D1C1]/30 text-[#F6D1C1] hover:border-[#F6D1C1]/60 hover:bg-[#F6D1C1]/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Availability Toggle */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={showAvailable}
                onChange={(e) => onAvailabilityChange(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-12 h-6 rounded-full border-2 transition-all duration-300 relative ${
                showAvailable 
                  ? 'border-[#F6D1C1] bg-[#F6D1C1]' 
                  : 'border-[#F6D1C1]/30 bg-transparent'
              }`}>
                <div className={`w-4 h-4 rounded-full transition-all duration-300 absolute top-0.5 ${
                  showAvailable 
                    ? 'right-0.5 bg-[#0D1B2A]' 
                    : 'left-0.5 bg-[#F6D1C1]'
                }`}></div>
              </div>
              <span className="text-[#F6D1C1] font-medium">Available Only</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;