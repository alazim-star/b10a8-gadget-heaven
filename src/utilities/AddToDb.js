import { toast } from 'react-toastify';

// AddToDb.js
const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('cart-list');
    return storedCartListStr ? JSON.parse(storedCartListStr) : [];
};

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(storedList));
        toast.success('Successfully Add To Cart List')
    } else {
        toast.error('Item already exists in the cart list'); // Only shows once now
    }
};

const removeFavorite = (id) => {
    const favorites = getStoredCartList();
    const remaining = favorites.filter((cart) => cart.productId !== id);
    localStorage.setItem('cart-list', JSON.stringify(remaining));
    toast.success('Successfully Removed!');
};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (!storedWishList.includes(id)) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success('Successfully Add To Wish List')
    } else {
        toast.error('Item already exists in the Wish list'); 
    }
};

export { addToStoredCartList, getStoredCartList, getStoredWishList, addToStoredWishList, removeFavorite };
