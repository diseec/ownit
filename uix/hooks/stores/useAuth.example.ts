import User from "@/models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

interface AuthState {
  isAuth: boolean;
  user?: User;
}

const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      // replace any with the type of your login credentials
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

const useAuthStore = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: { auth: AuthState }) => state.auth);

  const loginUser = (credentials: any) => {
    // replace any with the type of your login credentials
    // dispatch login action
    dispatch(login(credentials));
  };

  const logoutUser = () => {
    // dispatch logout action
    dispatch(logout());
  };

  return {
    ...authState,
    loginUser,
    logoutUser,
  };
};

export { authSlice };

export default useAuthStore;
