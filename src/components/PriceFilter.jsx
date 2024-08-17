import { useState } from 'react';

const PriceFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
    const handleReset = () => {
        setMinPrice('');
        setMaxPrice('');
    };

    return (
        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                <span className="text-sm font-medium">Price</span>
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
                    <p className="text-sm text-gray-700">The highest price is <span className="text-lg">৳</span>140000</p>
                    <button type="button" className="text-sm text-gray-900 underline underline-offset-4" onClick={ handleReset }>
                        Reset
                    </button>
                </header>
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between gap-4">
                        <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                            <p className="text-sm text-gray-600"><span className="text-lg">৳</span></p>
                            <input
                                type="number"
                                id="FilterPriceFrom"
                                placeholder="From"
                                value={ minPrice }
                                onChange={ (e) => setMinPrice(e.target.value) }
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </label>
                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                            <p className="text-sm text-gray-600"><span className="text-lg">৳</span></p>
                            <input
                                type="number"
                                id="FilterPriceTo"
                                placeholder="To"
                                value={ maxPrice }
                                onChange={ (e) => setMaxPrice(e.target.value) }
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                            />
                        </label>
                    </div>
                </div>
            </div>
        </details>
    );
};

export default PriceFilter;