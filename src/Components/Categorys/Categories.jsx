/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Categories = ({ categories }) => {
    const navigate = useNavigate()
 

    
    return (
     <div className="h-[500px] w-64 p-3 bg-white rounded-3xl mt-10  ml-10 mr-10">
            {categories.map(category => (
                <NavLink
                    to={`/category/${category.category}`} 
                    key={category.category}
                    className={({ isActive }) => `btn w-full rounded-3xl mb-5 ${isActive ? 'btn-active' : ''}`}
                  
                >
                    {category.category}
                </NavLink>
            ))}

<button className='btn btn-warning' onClick={() => navigate('/')}>
        View All
      </button>


        </div>
  )
}

export default Categories
