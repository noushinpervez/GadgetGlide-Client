import Rating from "./Rating";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    return (
        <li>
            <a className="group block overflow-hidden">
                <img
                    src={product.image}
                    alt={product.productName}
                    className="w-full object-cover transition duration-500 group-hover:scale-105 h-80"
                />

                <div className="relative bg-white pt-3">
                    <div className="flex items-center justify-between gap-2">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 line-clamp-1 text-ellipsis"
                        >
                            { product.productName }
                        </h3>
                        <p>
                            <span className="sr-only">Category</span>

                            <p className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium w-fit">{ product.category }</p>
                        </p>
                    </div>

                    <h3
                        className="text-sm text-indigo-600"
                    >
                        { product.brandName }
                    </h3>

                    <p className="text-sm mt-2 text-gray-500 text-ellipsis line-clamp-3">{ product.description }</p>

                    <Rating rating={ product.ratings } />

                    <div className="flex items-center justify-between">
                        <p>
                            <span className="sr-only">Regular Price</span>

                            <p className="tracking-widest text-gray-900">৳{ product.price }</p>
                        </p>
                        <p>
                            <span className="sr-only">Date</span>

                            <p className="text-xs text-gray-400">{ new Date(product.creationDateTime).toLocaleDateString() }</p>
                        </p>
                    </div>
                </div>
            </a>
        </li>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;