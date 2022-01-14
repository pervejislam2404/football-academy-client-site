import { createSlice } from '@reduxjs/toolkit'



export const stateSlice = createSlice({
    name: 'counter',
    initialState: {
        featuredPost: [],
        allProducts: [],
        loader: 0,
    },
    reducers: {
        setFeaturedPost: (state, { payload }) => {
            state.featuredPost = payload;
        },
        setAllProducts: (state, { payload }) => {
            state.allProducts = payload;
        },
        setLoader: (state, { payload }) => {
            state.loader = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFeaturedPost, setAllProducts, setLoader } = stateSlice.actions

export default stateSlice.reducer