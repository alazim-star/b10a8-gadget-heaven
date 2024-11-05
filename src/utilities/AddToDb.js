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
    } else {
        console.log(id, 'already exists in the cart list');
    }
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
    } else {
        console.log(id, 'already exists in the Wish list');
    }
};

export { addToStoredCartList, getStoredCartList, getStoredWishList, addToStoredWishList };