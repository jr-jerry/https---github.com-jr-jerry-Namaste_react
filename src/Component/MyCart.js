import { useSelector } from 'react-redux';
import DishesComponent from "./DishesComponent.js";
const MyCart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    return (<>
       
        <div  className='container shadow-md bg-slate-100 shadow-slate-400 rounded border-2'>
        <div className="w-3/5 mx-auto  font-bold text-center text-2xl my-2">Cart</div>
            <DishesComponent dishes={cartItems} className="border-2 rounded border-gray-100"/>
        </div>
        
        </>
    )
}
export default MyCart;