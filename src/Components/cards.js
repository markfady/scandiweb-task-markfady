import React from 'react'
import { useDispatch} from "react-redux";
import { addtocart } from "../rtk/slices/cartSlice";
export default function Cards(props) {
    const dispatch=useDispatch();
  return (
    <div className="Card-content">
    <img  className="image" src={props.image} style={{width : '400px'}} alt="product"/>
    <div className="Card-info"> 
    <h3>{props.name}</h3>
    <div>
    {props.symbol} {props.price}
    </div>
    
    <button onClick={()=>dispatch(addtocart(props.data))} >Add to cart</button> 
    </div>
</div>
)
}
