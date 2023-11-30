import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './Store';

//  product interface
interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
  }
  
  export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  });
  
  export const fetchProductById = createAsyncThunk('product/fetchProductById', async (productId:string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return response.data;
  });
  
  const initialState: ProductState = {
    products: [],
    selectedProduct: null,
  };
  
  const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      selectProduct: (state, action: PayloadAction<Product>) => {
        state.selectedProduct = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.products = action.payload;
        })
        .addCase(fetchProductById.fulfilled, (state, action) => {
          state.selectedProduct = action.payload;
        });
    },
  });
  
  export const { selectProduct } = productSlice.actions;
  export const selectProducts = (state: RootState) => state.product.products;
  export const selectSelectedProduct = (state: RootState) => state.product.selectedProduct;
  
  export default productSlice.reducer;