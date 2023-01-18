import React from "react";
import {useQuery , gql} from "@apollo/client";

const GET_CHARACTERS = gql 
`query{
    categories{
    products{
      name
      brand
      id
      gallery
    }
    }
  }  
` ;
function Test(){
    const {error,loading,data}= useQuery(GET_CHARACTERS);
    if(error) return <div> error</div>
    if(loading) return <div>loading</div>

    console.log({error,loading,data}); 
    return(
        <> 
        <div className="test">
        {data.categories[0].products.map(character => {
          return <div key={character.id}> 
            <div> {character.name}</div>
            <div> {character.brand}</div>
            <div> {character.id}</div>
            <div><img src={character.gallery}alt="productImage"/></div>
            </div>
        }

      )}
        </div>
        </>
    )
}
export default Test;