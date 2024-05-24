import { create } from "zustand";
import { getJWT, setJWT, removeJWT, getMe } from "../api/api-utils";
import { endpoints } from "../api/config";

export const useStore = create((set) => ({
    isAuth: false,
    user: null,
    token: null,
    login: (user,token) => {
        set({isAuth:true, user, token});
        setJWT(token)
    },
    logout: (user,token) => {
        set({isAuth:false, user: null, token: null});
        removeJWT(token)
    },
    checkAuth: async () => {
        const jwt = getJWT();
        if(jwt) {
            const user = await getMe(endpoints.me, jwt);
            if(user) {
                set({ isAuth: true, user, token: jwt});
                setJWT(jwt);
            } else {
                set({ isAuth: false, user: null, token: null});
                removeJWT();
            }
        } else {
            set({ isAuth: false, user:null, token: null});
        }
    }
}));