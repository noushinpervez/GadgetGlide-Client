import PropTypes from 'prop-types';

const BrandFilter = ({ brands, handleBrandChange, resetBrands }) => {
    return (
        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                <span className="text-sm font-medium">Brand</span>
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
                    <span className="text-sm text-gray-700">{ brands.length } Selected</span>
                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={ resetBrands }>
                        Reset
                    </button>
                </header>
                <ul className="space-y-1 border-t border-gray-200 p-4">
                    <li>
                        <label htmlFor="FilterApple" className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="FilterApple"
                                value="Apple"
                                className="size-5 rounded border-gray-300 brand-filter"
                                onChange={ () => handleBrandChange('Apple') }
                            />
                            <span className="text-sm font-medium text-gray-700">Apple</span>
                        </label>
                    </li>
                
                    <li>
                        <label htmlFor="FilterSamsung" className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="FilterSamsung"
                                value="Samsung"
                                className="size-5 rounded border-gray-300 brand-filter"
                                onChange={ () => handleBrandChange('Samsung') }
                            />
                            <span className="text-sm font-medium text-gray-700">Samsung</span>
                        </label>
                    </li>

                    <li>
                        <label htmlFor="FilterXiaomi" className="inline-flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="FilterGreen"
                                value="Xiaomi"
                                className="size-5 rounded border-gray-300 brand-filter"
                                onChange={ () => handleBrandChange('Xiaomi') }
                            />
                            <span className="text-sm font-medium text-gray-700">Xiaomi</span>
                        </label>
                    </li>
                </ul>
            </div>
        </details>
    );
};

BrandFilter.propTypes = {
    brands: PropTypes.arrayOf(PropTypes.string), 
    handleBrandChange: PropTypes.func,
    resetBrands: PropTypes.func,
};

export default BrandFilter;