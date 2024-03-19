import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/cdn_link";
import {faStar} from "@fortawesome/free-solid-svg-icons"

const CartComp=(props)=>{
    const {restraData}=props;
    const {name}=restraData;
    const {source}=restraData?.mainPhoto;
    const {ratingValue}=restraData?.aggregateRatings?.thefork;
    const {servesCuisine}=restraData;
    // const {link}=restraData?.cta;
    // console.log(link);
      return (
          <div  className="cart_item relative" >
             <img src={source}></img>
            <div className="restImage"></div>
              
            <div className="detail">
            <h3>{name}</h3>
            {/* <h4>${parseInt(costForTwo.slice(1,4))/2}</h4> */}
            <h4><FontAwesomeIcon icon={faStar} className="green"/>{ratingValue}</h4>
            <h4>{servesCuisine}</h4>
            </div>
           
          </div>
      )
  }
  export const PromotedCartComp=(CartComp)=>{
    return (props/*{restradata}*/)=>{
      return <div className="relative">
        <label className="absolute  bg-black text-white z-10 border rounded-sm">Promoted</label>
        <CartComp /*restraData={props.restData}*/{...props}/> 
      </div>
    }
  }
  export default CartComp;