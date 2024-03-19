import { useParams } from "react-router-dom";
import { useState } from "react";
import RestaurantsMenuItems from "./ RestaurantsMenuItems";
import Shimmer from "./Shimmer";
import useRestaurantsInfo from "../utils/useRestaurantsInfo";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const RestaurantsMenu=()=>{
    const {resid}=useParams();
    const [showDishes,setshowDishes]=useState(null);
    const restName=useRestaurantsInfo(resid);//inside restaurant 
    const {name}=restName;
    const dispatchFunction=useDispatch()
    const handleRemoveClick=()=>{
        dispatchFunction(clearCart());
        
    }
    console.log(restName);

    if(restName.length===0)return <Shimmer/>
    return (
        <div className="menu container  shadow-lg shadow-gray-600/30 p-1">
            <div className="restauImage">
                    <div className="big_restauImage">
                    <img src={restName?.photos[0].src}/>
                    </div>  
            </div>
            <h1 className="font-bold">{name}</h1>
            <ul>
                <div className="menu-wrapper flex justify-between  py-2">
                    <h2 className="menus font-semibold">Menus</h2>
                    <button onClick={handleRemoveClick} className="bg-slate-300 rounded box-shadow-lg shadow-blue-50 px-4 py-1 ">Clear</button>
                </div>
                {restName.menus[0].sections.map((item,index)=><RestaurantsMenuItems className="menu_items" 
                key={item.name} 
                itemInfo={item} 
                showDishes={showDishes=== index?true:false} 
                setshowDishes={()=>setshowDishes(index)}
                unsetshowDishes={()=>setshowDishes(null)}/>)}
          
            </ul>

        </div>
    )
}
export default RestaurantsMenu;