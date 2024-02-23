import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    email: "",
    name: "",
    role: 0, // 0:일반 유저, 1: admin
    image: "",
  },
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
