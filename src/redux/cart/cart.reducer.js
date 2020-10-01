
import CartActionTypes from "./cart.types";
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE={
    hidden:true,
    cartItem:[]
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
                cartItem:addItemToCart(state.cartItem,actions.payload)
            }
    }
}

export default cartReducer;

