import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const DishesComponent=(props)=>{
    const {dishes}=props;
    const dispatchFunction=useDispatch();

    const handleAddClick=(dish)=>{
        dispatchFunction(addItem(dish));
        console.log("clicked");
    }
    return( <div>
        {dishes.map((dish) =>(
        <div key ={dish.name} className="border-b-2 my-2 flex justify-between">
            <div>
                <span className="font-light text my-3 ">{dish.name}</span>
                <span> -{dish.price}$</span>
            </div>
            <div className="mr-2 mb-2">
                <button onClick={()=> handleAddClick(dish)} className="bg-black rounded-md text-white p-1">+Add</button>

            </div>         
        </div>
    
        ))}

    </div>)
}
export default DishesComponent;