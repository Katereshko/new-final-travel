import { createSlice } from '@reduxjs/toolkit'

export const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    selectedCategory: "THERMOSES"
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
})

export const getSelectedCategory = state => state.goods.selectedCategory;
export const {filterCategory} = goodsSlice.actions;
export default goodsSlice.reducer;