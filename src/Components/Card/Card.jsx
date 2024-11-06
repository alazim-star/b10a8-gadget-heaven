import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
const Card = ({coffee, handleRemove }) => {
  const { pathname } = useLocation();
  const { product_image, productId, product_title, price } = coffee || {};

  return (
    <div className="h-[400px] card bg-base-100 w-full shadow-xl p-5 relative">
      <figure className="bg-[#f7f7f7] py-8 rounded-2xl">
        <img className="h-[166px]" src={product_image} alt={product_title} />
      </figure>
      <div className="card-body">
        <div>
          <p className="card-title text-lg">{product_title}</p>
          <p className="card-title text-sm">Price: ${price}</p>
          <div className="border mt-5 border-dashed"></div>
          <NavLink to={`/products/${productId}`}>
            <button className="p-2 outline rounded-3xl mt-5 bg-white text-purple-600 hover:bg-purple-200">
              View Details
            </button>
          </NavLink>
        </div>
      </div>

      {pathname === "/dashboard" && (
        <button
          onClick={() => handleRemove(productId)}
          className="absolute -top-5 -right-5 text-red-500 hover:text-red-700 bg-black border border-red-500 p-2 rounded-full"
          aria-label="Delete"
        >
          <FaRegTrashAlt /> 
        </button>
      )}
    </div>
  );
};

export default Card;
