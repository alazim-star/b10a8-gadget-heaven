import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList } from '../../utilities/AddToDb';

import { FaTrashAlt } from 'react-icons/fa';
import Group from '../../assets/Group.png';
import DashCard from '../DashBoardCard/DashCard';

const DashBoard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [originalCartList, setOriginalCartList] = useState([]);
    const [originalWishList, setOriginalWishList] = useState([]);
    const [activeTab, setActiveTab] = useState('cart');
    const [isSortedByPrice, setIsSortedByPrice] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTotalPrice, setModalTotalPrice] = useState(0);
    const allCart = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));

        const showCartList = allCart.filter(cart => storedCartListInt.includes(cart.productId));
        setCartList(showCartList);
        setOriginalCartList(showCartList);

        const wishCartList = allCart.filter(cart => !storedCartListInt.includes(cart.productId));
        setWishList(wishCartList);
        setOriginalWishList(wishCartList);
    }, [allCart]);

    const cartTotalPrice = cartList.reduce((total, item) => total + item.price, 0);

    const handleTogglePriceSort = () => {
        setIsSortedByPrice(!isSortedByPrice);
        if (activeTab === 'cart') {
            const sortedCartList = isSortedByPrice 
                ? [...originalCartList] 
                : [...cartList].sort((a, b) => b.price - a.price);
            setCartList(sortedCartList);
        } else {
            const sortedWishList = isSortedByPrice 
                ? [...originalWishList] 
                : [...wishList].sort((a, b) => b.price - a.price);
            setWishList(sortedWishList);
        }
    };

    const handlePurchaseClick = () => {
        if (cartTotalPrice>0) { 
            setModalTotalPrice(cartTotalPrice);
            setIsModalOpen(true);
        } else {
            alert("Cart total price is zero. Add items to proceed with purchase.");
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = (productId) => {
        if (activeTab === 'cart') {
            setCartList(cartList.filter(item => item.productId !== productId));
        } else {
            setWishList(wishList.filter(item => item.productId !== productId));
        }
    };
console.log(cartList);
    return (
        <div>
            <div className="">
                <div className=" bg-[#9538e2] h-[263px] text-center text-white py-10">
                    <h1 className="text-3xl font-bold mt-5">Dashboard</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level...</p>
                    <div className="mt-20 flex justify-center space-x-4">
                    <button className={`btn ${activeTab === 'cart' ? 'btn-active bg-purple-600' : ''}`} onClick={() => setActiveTab('cart')}>Cart</button>
                    <button className={`btn ${activeTab === 'wish' ? 'btn-active bg-purple-600' : ''}`} onClick={() => setActiveTab('wish')}>Wishlist</button>
                </div>
                </div>

                

                <div className="flex justify-end mt-10 container mx-auto gap-5">
                    <p className="text-lg font-semibold mt-4">Total Cost: ${cartTotalPrice.toFixed(2)}</p>
                    <button className="btn border-purple-600 text-purple-600 rounded-3xl" onClick={handleTogglePriceSort}>
                        Sort by Price
                    </button>
                    <button className="btn text-white bg-purple-500 rounded-3xl" onClick={handlePurchaseClick}>Purchase</button>
                </div>

                <div className="mt-5 container mx-auto h-full">
                    {activeTab === 'cart' ? (
                        <div>
                            <h2 className='font-bold mt-10 text-2xl'>Cart</h2>
                            <div className=''>
                                {cartList.map(cart => (


                                    <div className=" flex" key={cart.productId}>
                                        <DashCard dashCard={cart} />
                                        <button onClick={() => handleDelete(cart.productId)} className="text-red-500 hover:text-red-700">
                                            <FaTrashAlt size={20} />
                                        </button>
                                     
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 className='font-bold mt-10 text-2xl'>Wishlist</h2>
                            <div className='w-56'>
                                {wishList.map(cart => (
                                    <div className="flex " key={cart.productId}>
                                        <DashCard dashCard={cart} />
                                        <button onClick={() => handleDelete(cart.productId)} className="text-red-500 hover:text-red-700">
                                            <FaTrashAlt size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isModalOpen && modalTotalPrice > 0 && ( 
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <img className='ml-36' src={Group} alt="Success" />
            <h2 className="text-2xl ml-16 mt-5 font-bold mb-4">Purchase Successful</h2>
            <p className="text-sm ml-20 mb-4">Total Purchase Price: ${modalTotalPrice.toFixed(2)}</p>
            <button className="btn text-white bg-purple-500 rounded-3xl mt-4" onClick={closeModal}>Close</button>
        </div>
    </div>
)}

        </div>
    );
};

export default DashBoard;
