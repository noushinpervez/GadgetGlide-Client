import Rating from "./Rating";

const ProductCard = () => {
    return (
        <li>
            <a href="#" className="group block overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                    <div className="flex items-center justify-between">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            IPhone 13
                        </h3>
                        <p>
                            <span className="sr-only">Category</span>

                            <p className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium w-fit">Smartphone</p>
                        </p>
                    </div>

                    <h3
                        className="text-xs text-indigo-600"
                    >
                        Apple
                    </h3>

                    <p className="text-xs mt-2 text-gray-500">Short Description</p>

                    <Rating rating={ 3.5 } />

                    <div className="flex items-center justify-between">
                        <p>
                            <span className="sr-only">Regular Price</span>

                            <p className="tracking-wider text-gray-900"><span className="text-lg">৳</span>24</p>
                        </p>
                        <p>
                            <span className="sr-only">Date</span>

                            <p className="text-xs text-gray-400">17/08/2024</p>
                        </p>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default ProductCard;