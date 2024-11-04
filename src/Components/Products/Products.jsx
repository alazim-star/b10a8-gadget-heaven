import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
fetch('/product.json')
.then(res=>res.json())
.then(data=>setProducts(data))


},[])




    return (

<div className=" bg-[#f7f7f7] w-full container mx-auto">


        
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ml-14 lg:ml-0">
        {
    products.map(product=><Product key={product.product_id} product={product}></Product>)
}


            </div>

        </div>
    );
};

export default Products;