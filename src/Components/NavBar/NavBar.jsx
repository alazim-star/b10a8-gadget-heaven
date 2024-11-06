import { NavLink, useLocation } from "react-router-dom";




const NavBar = () => {
    const location = useLocation();
    const isWhiteBackground = location.pathname !== '/';
  


  

    return (
        <div className={isWhiteBackground ? "text-purple-600 " : "bg-[#9538e2] text-white"}>
            <nav className="navbar container mx-auto px-20 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-white">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "font-bold " : ""}>Home</NavLink></li>
                          
                            <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-bold" : ""}>Dashboard</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About</NavLink></li>
                            <li><NavLink to="/statistics" className={({ isActive }) => isActive ? "font-bold" : ""}>Statistics</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-3xl font-bold" : "text-purple-600 btn btn-ghost text-3xl"} >
                        Gadget Heaven
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>Home</NavLink></li>
                        
                        <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-bold" : ""}>Dashboard</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "font-bold" : ""}>About</NavLink></li>
                        <li><NavLink to="/statistics" className={({ isActive }) => isActive ? "font-bold" : ""}>Statistics</NavLink></li>
                    </ul>
                </div>

                <div  className="">
                
                    <i className="fa-solid fa-cart-shopping p-3 mr-5  rounded-full bg-white text-black" aria-label="Shopping Cart"></i>
                   
                 
                
                        <i className="fa-regular fa-heart p-3 rounded-full bg-white text-black" aria-label="Favorites"></i>
                                 
                   
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
