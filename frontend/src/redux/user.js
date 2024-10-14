import { createSlice } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/es/storage/session";

const User = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        name: '',
        isLogin: false,
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.userId = action.payload.id;
            state.name = action.payload.name;
        },
        logout: (state) =>  {
            state.isLogin = false;
            state.userId = null;
            state.name = '';
            sessionStorage.clear();
        }
    }
})

export default User;
export const { login, logout } = User.actions;