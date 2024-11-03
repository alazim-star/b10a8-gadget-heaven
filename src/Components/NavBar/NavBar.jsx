import { NavLink } from "react-router-dom";
import BannerImage from "../../assets/banner.jpg";

const NavBar = () => {
    return (
        <div>
            <div className="bg-[#9538e2] min-h-[694px] ml-5 mr-5 rounded-2xl relative">

                <div className="navbar container mx-auto px-20 py-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                               <NavLink to={"/"}>Home</NavLink>
                               <NavLink to={"/statistics"}>Statistics</NavLink>
                               <NavLink to={"/dashboard"}>DashBoard</NavLink>
                               <NavLink to={"/about"}>About</NavLink>
                            </ul>
                        </div>
                        <NavLink className="btn btn-ghost text-white text-xl" to={"/"}>Gadget Heaven</NavLink>
                        <a ></a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-10 text-white">
                           <NavLink to={"/"}>Home</NavLink>
                           <NavLink to={"/statistics"}>Statistics</NavLink>
                           <NavLink to={"/dashboard"}>Dashboard</NavLink>
                           <NavLink to={"/about"}>About</NavLink>
                        </ul>
                    </div>

                    <div className="navbar-end gap-5">
                        <i className="fa-solid fa-cart-shopping p-4 rounded-full bg-white"></i>
                        <i className="fa-regular fa-heart p-4 rounded-full bg-white"></i>
                    </div>
                </div>

                <div className="hero-content text-center text-white container mx-auto">
                    <div>
                        <h1 className="text-5xl font-bold">
                            Upgrade Your Tech Accessories with Gadget Heaven
                        </h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <NavLink>
                            <button className="px-6 py-3 rounded-3xl bg-white text-purple-600 hover:bg-purple-200">
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="bg-purple-500 rounded-3xl w-[1062px] absolute inset-0  ml-56 mt-[450px]  ">
                    <img
                        className="h-[563px] border w-[1062px] p-5 rounded-3xl"
                        src={BannerImage}
                        alt="Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
