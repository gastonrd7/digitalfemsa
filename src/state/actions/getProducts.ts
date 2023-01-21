import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { IProduct } from '../../interfaces/product';

const fetchProductsRequest = () =>
  ({
    type: 'FETCH_PRODUCTS_REQUEST'
  } as const);

const fetchProductsSuccess = (payload: IProduct[] | null) =>
  ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload
  } as const);

const fetchProductsFailure = (error: AxiosError) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    error
  } as const;
};

const setFilterProducts = (payload: boolean | null) => {
    return {
      type: 'FETCH_SET_FILTER',
      payload
    } as const;
};

const cleanFilterProducts = () => {
    return {
      type: 'FETCH_CLEAN_FILTER',
    } as const;
};



export const getProducts: any = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(fetchProductsRequest());
        const { data } = await axios.get<IProduct[]>(
            `https://6222994f666291106a29f999.mockapi.io/api/v1/products`,
          );
        dispatch(fetchProductsSuccess(data.length > 0 ? data : null));

    } catch (error: any) {
        dispatch(fetchProductsFailure(error));
    };
};

export const setFilter: any = (is_redemption: boolean) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        dispatch(setFilterProducts(is_redemption));

    } catch (error: any) {
        console.log(error);
    };
};

export const cleanFilter: any = () => async (dispatch: any) => {
    try {
        dispatch(cleanFilterProducts());

    } catch (error: any) {
        console.log(error);
    };
};

export type Actions =
  | ReturnType<typeof fetchProductsRequest>
  | ReturnType<typeof fetchProductsSuccess>
  | ReturnType<typeof fetchProductsFailure>
  | ReturnType<typeof setFilterProducts>
  | ReturnType<typeof cleanFilterProducts>;