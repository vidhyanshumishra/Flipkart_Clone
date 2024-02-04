import * as actionType from '../constants/productConstant';

export const getProductReducer = (state={ products:[] }, action)=>{
   switch(action.type){
    case actionType.GET_Product_success:
        return {products: action.payload}

    case actionType.GET_Product_FAIL:
        return {error: action.payload}
    default:
        return state;
   } 
}

export const getProductDetailsReducer=(state={ product:{} },action)=>{
    switch(action.type){
        case actionType.GET_Product_Details_REQUEST:
          return {loading: true}

        case  actionType.GET_Product_Details_SUCCESS:
            return {loading:false, product: action.payload}
        case actionType.GET_Product_Details_FAIL:
            return {loading:false, error: action.payload}
        case actionType.GET_Product_Details_RESET:
            return {product:{}}
        default:
            return state
    }
}