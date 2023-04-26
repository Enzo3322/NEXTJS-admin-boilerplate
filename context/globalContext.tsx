import React, { createContext, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchLogin } from "@/services/login";
import { useMutation } from "react-query";

interface GlobalContextData {
    loginHandler: (param: { username: string; password: string }) => void;
    loginError: boolean;
    loginLoading: boolean;
}

interface GlobalContextProps {
    children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

const GlobalProvider: React.FC<GlobalContextProps> = ({ children }) => {
    const { push } = useRouter();

    const {
        mutate: loginHandler,
        isError: loginError,
        isLoading: loginLoading,
    } = useMutation(fetchLogin, {
        onSuccess: () => {
            push("/");
        },
    });

    return (
        <GlobalContext.Provider
            value={{
                loginHandler,
                loginError,
                loginLoading,
            }
            }
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };