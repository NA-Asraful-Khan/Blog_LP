import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  count: number;
}

const initialState: NotificationState = {
  count: 0,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = notificationSlice.actions;
export default notificationSlice.reducer;