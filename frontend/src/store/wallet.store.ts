import { configureStore } from '@reduxjs/toolkit';
import walletReducer from '../shared/slices/wallte.slice'

export const walletStore = configureStore({
    reducer: {
        wallet: walletReducer,
    },
});

export type RootState = ReturnType<typeof walletStore.getState>;
export type AppDispatch = typeof walletStore.dispatch;