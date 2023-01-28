import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';


export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
  const { category, order, sortBy, search } = params;
  const { data } = await axios.get<Pizza[]>(`https://62f02dcbe2bca93cd2345814.mockapi.io/items`, {
    params: pickBy({
      category,
      sortBy,
      order,
      search
    }, identity,),
  });
  return data;
},
);