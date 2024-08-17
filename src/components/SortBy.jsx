const SortBy = ({ setPriceSort, setDateSort }) => (
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
);

export default SortBy;