
import CartActionTypes from "./cart.types";
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE={
    hidden:true,
    cartItems:[]
};

const cartReducer=(state=INITIAL_STATE,actions)=>{
    switch(actions.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:
            return state;

        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,actions.payload)
            }
    }
}

export default cartReducer;

