"use client"
// ApiContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

type Context = {
    children: ReactNode;
}

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
    children: ReactNode;
}) {
    let [name, setName] = useState('Apichet');

    return (
        <AppContext.Provider value={
            { name, setName }
        }>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}