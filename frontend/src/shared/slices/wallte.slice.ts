import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IWalletState {
  address: string | null;
}

const initialState: IWalletState = {
  address: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    clearWalletAddress: (state) => {
      state.address = null;
    },
  },
});

export const { setWalletAddress, clearWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;