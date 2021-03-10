import React, { useState, ReactNode } from "react"
import * as auth from 'auth-provider'
import { http } from "utils/http";
import { useMount } from "utils";

import {User} from 'screens/project-list/search-panel'


interface AuthForm {
    username: string,
    password: string
}

const AuthContext = React.createContext<{
    user: User|null,
    register: (form: AuthForm) => Promise<void>,
    login: (form: AuthForm) => Promise<void>,
    logout: () => Promise<void>
} | undefined>(undefined)

AuthContext.displayName = 'AuthContext' // 用于React DevTools中

const bootstrapUser = async () => {
    let user = null;
    const token = auth.getToken();
    if (token) {
        const data = await http("me", { token });
        user = data.user;
    }
    return user;
};

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (form: AuthForm) => {
        return auth.login(form).then((user) => {
            setUser(user)
        })
    }

    const register = (form: AuthForm) => {
        return auth.register(form).then((user) => {
            setUser(user)
        })
    }

    const logout = () => {
        return auth.logout().then(() => {
            setUser(null)
        })
    }

    useMount(() => {
        bootstrapUser().then(setUser)
    })

    return <AuthContext.Provider children={children} value={{user, login, register, logout}} />
}

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth必须在AuthProvider中使用");
    }
    return context;
};
