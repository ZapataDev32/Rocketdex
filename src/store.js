import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';
import { logger } from './features/middleware';

const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
});

export default store;