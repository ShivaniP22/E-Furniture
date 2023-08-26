import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  SOFAS_PRODUCT_REQUEST,
  SOFAS_PRODUCT_SUCCESS,
  SOFAS_PRODUCT_FAIL,
  CATEGORY_CLEAR_ERRORS,
} from "./product_types";

export const getProduct =
  (currentPage = 1, price, brand) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      const { data } = await axios.get(
        `http://localhost:9000/api/v1/products?price[lte]=${price}&price[gte]=0&${
          brand && `keyword=${brand}`
        }`
      )
      //?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}
      // http://localhost:9000

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getProductByCategory =
  (currentPage = 1,category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      const { data } = await axios.get(
        `http://localhost:9000/api/v1/productsByCategory?category=${category}`
      );
      //?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}
      // http://localhost:9000

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// clearing the error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// clearing the error
export const clearCategoryErrors = () => async (dispatch) => {
  dispatch({ type: CATEGORY_CLEAR_ERRORS });
};
