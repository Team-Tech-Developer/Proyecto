import axios from "axios";

import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get("api/productos");
    dispatch({ 
        type: ALL_PRODUCTS_SUCCESS,
         payload: data });
  } catch (error) {
    dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: error.data.message
    })
  }
};

// Clear error
export const clearError = () => async(dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}
