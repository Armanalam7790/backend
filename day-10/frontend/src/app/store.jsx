import {configureStore} from '@reduxjs/toolkit'
import { UserSlice } from '../features/authSlice'

 export let store  =  configureStore({
    reducer:{
        auth:UserSlice.reducer
    }
})

