import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
/* eslint-disable react/prop-types */
const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation()
  const { name,product_image ,productId, category,product_title,price, rating } =
    coffee || {}

  return (
    <div className=" h-[400px] card bg-base-100 w-full  shadow-xl p-5">
    
    <figure className='bg-[#f7f7f7] py-8 rounded-2xl '>
      <img className='h-[166px]'
        src={product_image}
        alt="" />
    </figure>
    <div className="card-body">
     
   <div>
      
   <h2 className="card-title">{}</h2>
   <p className='card-title text-lg'> {product_title}</p>
   <p className="card-title text-sm ">Price:{price}</p>
   
   <div className="border mt-5 border-dashed "></div>
  
  <NavLink to={`/products/${productId}`}>
       <button className="p-2  outline rounded-3xl mt-5  bg-white text-purple-600 hover:bg-purple-200">
          View Details
     </button>
     </NavLink>
  
   </div>
  
   </div>
  
    
    </div>

  )
}

export default Card
