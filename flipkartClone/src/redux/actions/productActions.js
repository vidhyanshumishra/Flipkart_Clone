import axios from "axios";
import * as actionTypes from '../constants/productConstant';

// local
// const URL = 'http://localhost:8000'

// production
const URL = '';

export const getProducts=()=>async(dispatch)=>{
    try{
        const {data}= await axios.get(`${URL}/products`);
        dispatch({type:actionTypes.GET_Product_success,payload:data})
    }catch(error){
        dispatch({type:actionTypes.GET_Product_FAIL,payload:error.message});
       
    }
}

export const getProductDetails = (id)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_Product_Details_REQUEST});
        const {data}= await axios.get(`${URL}/product/${id}`);
        dispatch({type:actionTypes.GET_Product_Details_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:actionTypes.GET_Product_Details_FAIL,payload:error.message});
    }
}