import React from "react";
import {useQuery , gql} from "@apollo/client";

import Cards from "./cards";
import { useSelector } from "react-redux";

const GET_CHARACTERS = gql 
`query{
  categories{
  products{
    name
    brand
    id
    gallery
    prices{
      currency{
        label
        symbol
      }
      amount
    }
  }
  }
}  
` ;
function Test(){
  const items=useSelector(state=>state.cart) //read the length of added items in the state of cart
    const {error,loading,data}= useQuery(GET_CHARACTERS);
    if(error) return <div> error</div>
    if(loading) return <div>loading</div>

    console.log({error,loading,data}); 
    return(
        <> 
        <h2>Added items : {items.length}</h2>
        <div className="test">
        <div className='container'>
        <div className='Card-options'>
        {data.categories[0].products.map(character => {
        return <Cards key={character.id}
        image={character.gallery}
        name={character.name}
        data={character}    // passing the data(selected products)to the action payload of addtocart action
        price={character.prices[0].amount}
        symbol={character.prices[0].currency.symbol} 
        /> 
        }
      )}
      </div>
      </div>
        </div>
        </>
    )
}
export default Test;