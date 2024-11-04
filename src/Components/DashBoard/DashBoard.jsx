// DashBoard.js
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../../utilities/AddToDb";

const DashBoard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [originalCartList, setOriginalCartList] = useState([]);
    const [originalWishList, setOriginalWishList] = useState([]);
    const [cartSort, setCartSort] = useState('');
    const [wishSort, setWishSort] = useState('');
    const [activeTab, setActiveTab] = useState('cart');

    const allCart = useLoaderData();

    // useEffect(() => {
    //     const storedCartList = getStoredCartList();
    //     const storedCartListInt = storedCartList.map(id => parseInt(id));

    //     const readCartList = allCart.filter(cart => storedCartListInt.includes(cart.productId));
    //     setCartList(readCartList);
    //     setOriginalCartList(readCartList);

    //     const storedWishList = getStoredWishList();
    //     const storedWishListInt = storedWishList.map(id => parseInt(id));

    //     const wishCartList = allCart.filter(cart => storedWishListInt.includes(cart.productId));
    //     setWishList(wishCartList);
    //     setOriginalWishList(wishCartList);
    // }, [allCart]);

    const handleCartSort = (sortType) => {
        setCartSort(sortType);
        const sortedCartList = [...originalCartList];
        if (sortType === 'No of Page') {
            sortedCartList.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortType === 'Ratings') {
            sortedCartList.sort((a, b) => b.rating - a.rating);
        }
        setCartList(sortedCartList);
    };

    const handleWishSort = (sortType) => {
        setWishSort(sortType);
        const sortedWishList = [...originalWishList];
        if (sortType === 'No of Page') {
            sortedWishList.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortType === 'Ratings') {
            sortedWishList.sort((a, b) => b.rating - a.rating);
        }
        setWishList(sortedWishList);
    };

    return (
        <div>
            <div className="bg-[#9538e2] h-[263px]">
                <div className="text-center text-white py-10">
                    <h1 className="text-3xl font-bold mt-5">Dashboard</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level...</p>
                </div>
                
                <div className="flex justify-center mt-5">
                    <button
                        className={`btn ${activeTab === 'cart' ? 'btn-active' : ''}`}
                        onClick={() => setActiveTab('cart')}
                    >
                        Cart List
                    </button>
                    <button
                        className={`btn ${activeTab === 'wishlist' ? 'btn-active' : ''}`}
                        onClick={() => setActiveTab('wishlist')}
                    >
                        Wish List
                    </button>
                </div>
            </div>

            {activeTab === 'cart' ? (
                <div>
                    <h2 className="text-xl font-semibold mt-4">Your Cart</h2>
                    <button onClick={() => handleCartSort('No of Page')}>Sort by Pages</button>
                    <button onClick={() => handleCartSort('Ratings')}>Sort by Ratings</button>
                    <ul>
                        {cartList.map(item => (
                            <li key={item.productId} className="p-2">
                                {item.product_title} - ${item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h2 className="text-xl font-semibold mt-4">Your Wish List</h2>
                    <button onClick={() => handleWishSort('No of Page')}>Sort by Pages</button>
                    <button onClick={() => handleWishSort('Ratings')}>Sort by Ratings</button>
                    <ul>
                        {wishList.map(item => (
                            <li key={item.productId} className="p-2">
                                {item.product_title} - ${item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DashBoard;