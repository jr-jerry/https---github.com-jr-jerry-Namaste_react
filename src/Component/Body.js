import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import CartComp,{PromotedCartComp} from "./CartComponent";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRestaurantsList from "../utils/useRestaurantsList.js";
const Body=()=>{
  
    const {responseData,filterdata,searchInput,setSearchInput,handleSearch,removeSearch}=useRestaurantsList();
    const onlineStatus=useOnlineStatus();
    const PromotedCart=PromotedCartComp(CartComp);
   
      
      if(!onlineStatus){ 
        return (<div className="container "> <span>Looks like your Internet Not working</span>
                <FontAwesomeIcon icon={faWifi} size="4x" fade/>
                 </div>)}


    return (responseData.length===0)?<Shimmer/>: (
        <div className="body">

            
            <div className="searchInput">
                <input type="text" className="input_text" value={searchInput} placeholder="Type restaurants Name" onChange={(e)=>setSearchInput(e.target.value)}/>

                <button className="text_search button" onClick={()=>handleSearch()
                 
                }>Search</button>
                <button className="unFilter button" onClick={()=>removeSearch()}>Unfilter</button>
            
            </div>
            <div className="showCase">
             { filterdata.slice(0,8).map((restaurant)=>(
                <Link className="Link" key={restaurant.id} to={"/restaurants/"+restaurant.id}>
                        {(!restaurant.isInsider)?
                            <PromotedCart restraData={restaurant}/>:
                            <CartComp restraData={restaurant}/>
                            }
                </Link>))
             }
                
             
           
            </div>
        </div>
    )
    console.log(filterdata);
}

export default Body;