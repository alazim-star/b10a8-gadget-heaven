
import Banner from './../../Components/Banner/Banner';
import Categories from './../../Components/Categorys/Categories';
import { useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Headings from './../../Components/Headings/Headings';


const Home = () => { 
    const categories = useLoaderData();
    
    

    return (
        <div>
            <Banner />
          <Headings></Headings>
            <div className=''>
                <div className='flex'>
                            
                      
                   
                            <Categories categories={categories} />
                            <Outlet />
              
                </div>
               
            </div>
           
        </div>
    );
};

export default Home;
