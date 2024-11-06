import { useState,useEffect} from "react";
import DashCard from "./DashCard";

const DashCards = () => {
    const [dashCards,setDashCards]=useState([])
   useEffect(()=>{
    fetch('/product.json')
    .then(res=>res.json())
    .then(data=>setDashCards(data))
    
    
    },[])

    
    return (
        <div>
            <div className=" bg-[#f7f7f7] w-full container mx-auto">


        
          
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ml-14 lg:ml-0">
{
dashCards.map(dashCard=><DashCard key={dashCard.product_id} dashCard={dashCard}>
  
</DashCard>)
}


    </div>

</div>
        </div>
    );
};

export default DashCards;