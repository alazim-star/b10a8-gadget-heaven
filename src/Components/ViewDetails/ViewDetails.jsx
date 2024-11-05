import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { addToStoredCartList, addToStoredWishList } from "../../utilities/AddToDb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewDetails = () => {
    const { productId } = useParams();
    const data = useLoaderData();
    const id = parseInt(productId);
    const product = data.find(product => product.productId === id);

    if (!product) return <p>Product not found.</p>;

    const { product_image, product_title, price, description, rating, specification } = product;

    const handleAddToCart = () => {
        addToStoredCartList(id);
        toast.success("Successfully Add To Cart ");
    };

    const handleAddToWish = () => {
        addToStoredWishList(id);
        toast.info("Successfully Add To Wishlist");
    };

    return (
        <div className="mb-96">
            <div className="bg-[#9538e2] h-[463px] relative">
                <div className="text-center text-white py-10">
                    <h1 className="text-3xl font-bold mt-5">Product Details</h1>
                    <p>
                        Explore the latest gadgets that will take your experience to the next level. 
                        From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
            </div>

            <div className="flex w-[1280px] h-[567px] rounded-3xl absolute inset-0 bg-white mt-64 items-center mx-36 p-10">
                <div className="h-[424px] w-[503px] rounded-3xl p-10">
                    <img
                        className="rounded-3xl h-[424px] w-[503px]"
                        src={product_image}
                        alt={product_title}
                    />
                </div>

                <div className="p-10">
                    <h2 className="text-2xl font-bold">{product_title}</h2>
                    <p>Price: $ {price}</p>
                    <button className="btn btn-xs bg-green-300">In Stock</button>
                    <p className="mt-4">{description}</p>

                    <h5 className="mt-6 text-lg font-semibold">Specifications:</h5>
                    <ul className="list-disc pl-6 mt-2">
                        {specification.map(({ feature, value }, index) => (
                            <li key={index}>{feature}: {value}</li>
                        ))}
                    </ul>

                    <h5 className="font-bold mt-5">Rating:</h5>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <input
                                key={i}
                                type="radio"
                                name="rating"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked={i < rating}
                            />
                        ))}
                        <span className="bg-red-50 rounded-full ml-2 p-1">{rating}</span>
                    </div>

                    <div className="mt-5">
                        <button
                            onClick={handleAddToCart}
                            className="btn bg-purple-500 text-white rounded-3xl relative"
                        >
                            Add to Cart <i className="fa-solid fa-cart-shopping p-4" aria-label="Shopping Cart"></i>
                        </button>
                        <button
                            onClick={handleAddToWish}
                            className="ml-3 btn relative"
                        >
                            <i className="fa-regular fa-heart p-4 rounded-full border bg-white" aria-label="Favorites"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Toast container to display toast messages */}
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default ViewDetails;
