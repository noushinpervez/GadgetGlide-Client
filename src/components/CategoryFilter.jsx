const CategoryFilter = ({ categories, handleCategoryChange, resetCategories }) => (
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
                            value="Smartphones"
                            className="size-5 rounded border-gray-300 category-filter"
                            onChange={ () => handleCategoryChange('Smartphones') }
                        />
                        <span className="text-sm font-medium text-gray-700">Smartphone</span>
                    </label>
                </li>
                
                <li>
                    <label htmlFor="FilterLaptop" className="inline-flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="FilterLaptop"
                            value="Laptops"
                            className="size-5 rounded border-gray-300 category-filter"
                            onChange={ () => handleCategoryChange('Laptops') }
                        />
                        <span className="text-sm font-medium text-gray-700">Laptop</span>
                    </label>
                </li>

                <li>
                    <label htmlFor="FilterAccessory" className="inline-flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="FilterAccessory"
                            value="Accessories"
                            className="size-5 rounded border-gray-300 category-filter"
                            onChange={ () => handleCategoryChange('Accessories') }
                        />
                        <span className="text-sm font-medium text-gray-700">Accessories</span>
                    </label>
                </li>
            </ul>
        </div>
    </details>
);

export default CategoryFilter;