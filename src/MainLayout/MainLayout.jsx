import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
          <NavBar></NavBar>
         
          <Outlet></Outlet>
           {/* <div className="bg-[#f7f7f7] min-h-[calc(100vh-146px)]">
           
          </div>  */}
    
          <Footer></Footer>
          

           


        </div>
    );
};

export default MainLayout;