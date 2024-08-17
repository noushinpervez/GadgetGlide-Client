import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SortBy from "../components/SortBy";
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import BrandFilter from "../components/BrandFilter";

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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                        <SearchBar search={search} setSearch={setSearch} />

                        <SortBy setPriceSort={ setPriceSort } setDateSort={ setDateSort } />

                        {/* Filters */ }
                        <div>
                            <p className="block text-xs font-medium text-gray-700">Filters</p>

                            <div className="mt-1 space-y-2">
                                <CategoryFilter categories={ categories } handleCategoryChange={ handleCategoryChange } resetCategories={ resetCategories } />

                                <PriceFilter />
                                
                                <BrandFilter brands={ brands } handleBrandChange={ handleBrandChange } resetBrands={ resetBrands } />
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

            {/* Pagination */}
            <Pagination
                currentPage={ currentPage }
                totalPages={ totalPages }
                onPageChange={ handlePageChange }
            />
        </section>
    );
};

export default Home;