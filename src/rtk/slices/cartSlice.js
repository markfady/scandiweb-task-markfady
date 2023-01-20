import { createSlice } from "@reduxjs/toolkit";

 export const cartSlice=createSlice({
    initialState:[],
    name:'cartSlice',
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload);
        }
    }
})
export const{addtocart} =cartSlice.actions;
export default cartSlice.reducer;