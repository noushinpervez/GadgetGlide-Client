import PropTypes from 'prop-types';

const CategoryFilter = ({ categories, handleCategoryChange, resetCategories }) => {
    return (
        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                <span className="text-sm font-medium">Category</span>
                <span className="transition group-open:-rotate-180">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </span>
            </summary>
            <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                    <span className="text-sm text-gray-700">{ categories.length } Selected</span>
                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={ resetCategories }>
                        Reset
                    </button>
                </header>
                <ul className="space-y-1 border-t border-gray-200 p-4">
                    <li>
                        <label htmlFor="FilterSmartphone" className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="FilterSmartphone"
                                value="Smartphone"
                                className="size-5 rounded border-gray-300 category-filter"
                                onChange={ () => handleCategoryChange('Smartphone') }
                            />
                            <span className="text-sm font-medium text-gray-700">Smartphone</span>
                        </label>
                    </li>

                    <li>
                        <label htmlFor="FilterLaptop" className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="FilterLaptop"
                                value="Laptop"
                                className="size-5 rounded border-gray-300 category-filter"
                                onChange={ () => handleCategoryChange('Laptop') }
                            />
                            <span className="text-sm font-medium text-gray-700">Laptop</span>
                        </label>
                    </li>

                    <li>
                        <label htmlFor="FilterAirpod" className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="FilterAirpod"
                                value="Airpod"
                                className="size-5 rounded border-gray-300 category-filter"
                                onChange={ () => handleCategoryChange('Airpod') }
                            />
                            <span className="text-sm font-medium text-gray-700">Airpod</span>
                        </label>
                    </li>

                    <li>
                        <label htmlFor="FilterSmartWatch" className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="FilterSmartWatch"
                                value="Smart Watch"
                                className="size-5 rounded border-gray-300 category-filter"
                                onChange={ () => handleCategoryChange('Smart Watch') }
                            />
                            <span className="text-sm font-medium text-gray-700">Smart Watch</span>
                        </label>
                    </li>
                </ul>
            </div>
        </details>
    );
};

CategoryFilter.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    handleCategoryChange: PropTypes.func,
    resetCategories: PropTypes.func,
};

export default CategoryFilter;