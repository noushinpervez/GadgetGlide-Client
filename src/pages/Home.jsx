import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

const Home = () => {
    return (
        <section className="my-24">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                    <p className="mt-4 max-w-md text-gray-500">
                        40 items in product
                    </p>
                </header>

                <div className="mt-8 lg:grid lg:grid-cols-4 items-start gap-8">
                    <div className="space-y-4 block">
                        <div className="relative">
                            <label htmlFor="Search" className="sr-only">Search</label>

                            <input
                                type="text"
                                id="Search"
                                placeholder="Search for product"
                                className="w-full rounded-md border-gray-300 py-2.5 pe-10 shadow-sm sm:text-sm"
                            />

                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <button type="button" className="text-gray-600 hover:text-gray-700">
                                    <span className="sr-only">Search</span>

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
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>

                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

                            <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm p-4">
                                <option>Sort By</option>
                                <option value="Title, DESC">Date, DESC</option>
                                <option value="Price, DESC">Price, DESC</option>
                                <option value="Price, ASC">Price, ASC</option>
                            </select>
                        </div>

                        <div>
                            <p className="block text-xs font-medium text-gray-700">Filters</p>

                            <div className="mt-1 space-y-2">
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
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
                                            <span className="text-sm text-gray-700">0 Selected</span>

                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterInStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">Smartphone</span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterPreOrder"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">Laptop</span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterOutOfStock"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">Accessory</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>

                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Price</span>

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
                                            <p className="text-sm text-gray-700">The highest price is <span className="text-lg">৳</span>600</p>

                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
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
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>

                                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                    <p className="text-sm text-gray-600"><span className="text-lg">৳</span></p>

                                                    <input
                                                        type="number"
                                                        id="FilterPriceTo"
                                                        placeholder="To"
                                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Brand</span>

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
                                            <span className="text-sm text-gray-700">0 Selected</span>

                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>

                                        <ul className="space-y-1 border-t border-gray-200 p-4">
                                            <li>
                                                <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterRed"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">Apple</span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterBlue"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">Samsung</span>
                                                </label>
                                            </li>

                                            <li>
                                                <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        id="FilterGreen"
                                                        className="size-5 rounded border-gray-300"
                                                    />

                                                    <span className="text-sm font-medium text-gray-700">Xiaomi</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="lg:col-span-3 lg:mt-0 mt-8">
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <ProductCard />
                        </ul>
                    </div>
                </div>
            </div>
            <Pagination />
        </section>
    );
};

export default Home;