import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [priceSort, setPriceSort] = useState('');
    const [dateSort, setDateSort] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products', {
                    params: {
                        page: currentPage,
                        search,
                        category: categories.join(','),
                        brandName: brands.join(','),
                        priceSort,
                        dateSort,
                    },
                });
                setProducts(response.data.products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [currentPage, search, categories, brands, priceSort, dateSort]);

    const handleCategoryChange = (category) => {
        setCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(c => c !== category)
                : [...prevCategories, category]
        );
    };

    const handleBrandChange = (brand) => {
        setBrands(prevBrands =>
            prevBrands.includes(brand)
                ? prevBrands.filter(b => b !== brand)
                : [...prevBrands, brand]
        );
    };

    const resetCategories = () => {
        setCategories([]);
        document.querySelectorAll('.category-filter').forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    const resetBrands = () => {
        setBrands([]);
        document.querySelectorAll('.brand-filter').forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    return (
        <section className="my-24">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                    <p className="mt-4 max-w-md text-gray-500">
                        { products.length } items in product
                    </p>
                </header>

                {/* Search */ }
                <div className="mt-8 lg:grid lg:grid-cols-4 items-start gap-8">
                    <div className="space-y-4 block">
                        <div className="relative">
                            <label htmlFor="Search" className="sr-only">Search</label>

                            <input
                                type="text"
                                id="Search"
                                placeholder="Search for product"
                                className="w-full rounded-md border-gray-300 py-4 pe-10 shadow-sm sm:text-sm"
                                value={ search }
                                onChange={ (e) => setSearch(e.target.value) }
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

                        {/* Sort By */ }
                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700">Sort By</label>

                            <select
                                id="SortBy"
                                className="mt-1 rounded w-full border-gray-300 text-sm p-4"
                                onChange={ (e) => {
                                    const value = e.target.value;
                                    if (value.includes("Price")) {
                                        setPriceSort(value.includes("ASC") ? 'asc' : 'desc');
                                        setDateSort('');
                                    } else if (value.includes("Date")) {
                                        setDateSort('desc');
                                        setPriceSort('');
                                    }
                                } }
                            >
                                <option value="">Sort By</option>
                                <option value="Date, DESC">Date, Newest First</option>
                                <option value="Price, DESC">Price, High to Low</option>
                                <option value="Price, ASC">Price, Low to High</option>
                            </select>
                        </div>

                        {/* Filters */ }
                        <div>
                            <p className="block text-xs font-medium text-gray-700">Filters</p>

                            <div className="mt-1 space-y-2">
                                {/* Category Filter */ }
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

                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
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

                                {/* Brand Filter */ }
                                <details
                                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                    >
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
                            </div>
                        </div>
                    </div>

                    {/* Cards */ }
                    <div className="lg:col-span-3 lg:mt-0 mt-8">
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            { products.map(product => (
                                <ProductCard key={ product._id } product={ product } />
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
            <Pagination />
        </section>
    );
};

export default Home;