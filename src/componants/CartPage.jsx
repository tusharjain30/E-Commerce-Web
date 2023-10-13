import React,{ createContext, useEffect, useReducer } from 'react';
import Header from './Header';
import Navbar from './Nav';
import Footer from './Footer';
import ContextCart from './ContextCart';
import CartItems from './CartItems';

export let Context = createContext();

let reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM"){
        return {
            ...state,
            items: state.items.filter((curVal) => {
                return curVal.id != action.payload;
            })
        }
    }

    if (action.type === "CLEAR_CART"){
        return {
            ...state,
            items: [],
        }
    }

    if (action.type === "INCREMENT"){
        let updateItem = state.items.map((curVal) => {
            if(curVal.id === action.payload){
                return {...curVal, quantity: curVal.quantity + 1};
            }
            return curVal;
        })
        return { ...state, items: updateItem};
    }

    if (action.type === "DECREMENT"){
        let updateItem = state.items.map((curVal) => {
            if (curVal.id === action.payload){
                return {...curVal, quantity: curVal.quantity - 1};
            }
            return curVal;
        }).filter((curVal) => {
            return curVal.quantity != 0
        })
        return {...state, items:updateItem};
    }

    if(action.type === "GET_TOTAL"){
        let {totalItems, totalAmount} = state.items.reduce((accum, curVal) => {
            let Cartquantity = curVal.quantity;
            let updatedAmount = curVal.price * Cartquantity;
            accum.totalItems += Cartquantity;
            accum.totalAmount += updatedAmount;
            return accum;
        }, {
            totalItems: 0,
            totalAmount: 0,
        });
        return {...state, totalItems, totalAmount}
    }

    return state;
}

let initialState = {
    items: CartItems,
    totalAmount: 0,
    totalItems: 0,
}


let CartPage = () => {

    // remove items in cartPage --------->
    let removeItems = (id) => {
        return dispatch({
            type : "REMOVE_ITEM",
            payload : id,
        });
    };

    // clear cart
    let clearCart = () => {
        return dispatch({
            type: "CLEAR_CART",
        });
    }

    // increment quantity ---------->
    let increment = (id) => {
        return dispatch({
            type : "INCREMENT",
            payload : id,
        });
    };

    // decrease quantity ----------->
    let decrease = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        })
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // use useEffect to update the items data ----->
    useEffect(() => {
        dispatch({
            type: "GET_TOTAL",
        })
    },[state.items]);

    return (
        <>
        <Context.Provider value = {state.totalItems} >
            <Navbar />
        </Context.Provider>

        <Header />
                <Context.Provider value = {{ ...state, removeItems, increment, decrease, clearCart } }>
                    <ContextCart />
                </Context.Provider>
            <Footer />
        </>
    )
}

export default CartPage;