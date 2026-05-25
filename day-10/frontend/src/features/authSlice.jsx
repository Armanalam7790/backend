import { createSlice } from "@reduxjs/toolkit";

  export let UserSlice  = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false

    },

    reducers:{
        addUser:(state, action)=>{
            state.user = action.payload;
            state.isAuthenticated =  true
        },
    }
})


export const  {addUser } = UserSlice.actions
