import { configureStore } from '@reduxjs/toolkit';
import stateStores from './stateSlice/stateSlice';

export default configureStore({
    reducer: {
        states: stateStores,
    },
})