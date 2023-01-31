import React from 'react'
import { useDispatch} from "react-redux";
import { addtocart } from "../rtk/slices/cartSlice";
export default function Cards(props) {
    const dispatch=useDispatch();
  return (
    <div className="Card-content">
    <img  className="image" src={props.image} alt="product"/>
    <div className="Card-info"> 
    <p>{props.name}</p>
    <div className='money'>
    {props.symbol} {props.price}
    </div>
    </div>
    {/* <button onClick={()=>dispatch(addtocart(props.data))} >Add to cart</button>  */}
    </div>
    
)
}
