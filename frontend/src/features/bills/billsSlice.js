import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bills: [],
  bill: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createBill = createAsyncThunk(
  "bills/create",
  async (billData, thunkAPI) => {
    try {
      const API_URL = "/bills/";
      const token = thunkAPI.getState().auth.user.token;
      const createBill = async (billData, token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(API_URL, billData, config);

        return response.data;
      };
      return await createBill(billData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get user bills
export const getBills = createAsyncThunk(
  "bills/allBills",
  async (_, thunkAPI) => {
    try {
      const API_URL = "/bills/";
      const token = thunkAPI.getState().auth.user.token;
      const getBills = async (token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(API_URL, config);

        return response.data;
      };
      return await getBills(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//delete user bills
export const deleteBill = createAsyncThunk(
  "bills/delete",
  async (id, thunkAPI) => {
    try {
      const API_URL = "/bills/";
      const token = thunkAPI.getState().auth.user.token;
      const deleteBill = async (id, token) => {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.delete(API_URL + id, config);

        return response.data;
      };
      return await deleteBill(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bills.push(action.payload);
      })
      .addCase(createBill.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bills = action.payload;
      })
      .addCase(getBills.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bills = state.bills.filter((bill) => {
          return bill._id !== action.payload.id;
        });
      })
      .addCase(deleteBill.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = billsSlice.actions;
export default billsSlice.reducer;
