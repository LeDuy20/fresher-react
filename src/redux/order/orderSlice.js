import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
  carts: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    doAddBookAction: (state, action) => {
      let carts = state.carts;
      const item = action.payload;

      let isExistIndex = carts.findIndex((c) => c._id === item._id);
      if (isExistIndex > -1) {
        carts[isExistIndex].quantity += item.quantity;
        if (
          carts[isExistIndex].quantity > carts[isExistIndex].detail.quantity
        ) {
          carts[isExistIndex].quantity = carts[isExistIndex].detail.quantity;
        }
      } else {
        carts.push({
          quantity: item.quantity,
          _id: item._id,
          detail: item.detail,
        });
      }
      //update redux
      state.carts = carts;
      message.success("Thêm vào giỏ hàng thành công !!!");
    },

    doUpdateCartAction: (state, action) => {
      let carts = state.carts;
      const item = action.payload;

      let isExistIndex = carts.findIndex((c) => c._id === item._id);
      if (isExistIndex > -1) {
        carts[isExistIndex].quantity += item.quantity;
        if (
          carts[isExistIndex].quantity > carts[isExistIndex].detail.quantity
        ) {
          carts[isExistIndex].quantity = carts[isExistIndex].detail.quantity;
        }
      } else {
        carts.push({
          quantity: item.quantity,
          _id: item._id,
          detail: item.detail,
        });
      }

      //update redux
      state.carts = carts;
    },

    doDeteleCartAction : (state, action) => {
      state.carts = state.carts.filter(x => x._id !== action.payload._id)
    },
    doDeleteCartsAfterOrder: (state, action) => {
      state.carts = []
    }
  },
});

export const { doAddBookAction,doUpdateCartAction, doDeteleCartAction ,doDeleteCartsAfterOrder} = orderSlice.actions;

export default orderSlice.reducer;
