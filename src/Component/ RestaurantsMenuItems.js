import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DishesComponent from "./DishesComponent";
import { useState } from 'react';
const RestaurantsMenuItems =(props)=>{

    const {itemInfo,showDishes,setshowDishes,unsetshowDishes}=props;
    const [click,setClick]=useState(true);
    const {name,items}=itemInfo;

    const handleClick=()=>{
        click?setshowDishes():unsetshowDishes();
        setClick(!click);        
      
    }
    return <div  className="border-2  px-3 py-6 mx-2.5 my-2 shadow-lg shadow-white-500/50 rounded-lg font-medium">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span>{name}({items.length})</span>
        <span>{<FontAwesomeIcon icon={faAngleDown} />}</span>
        </div>
                {showDishes && <DishesComponent className={showDishes ?'dishopactiy1 dishesComponent':
            'dishopacity0 dishesComponent' } dishes={items}/>} 
        
    </div>
}
export default RestaurantsMenuItems;