import { createContext, type ReactNode } from "react"

export const FrontendData = createContext<unknown>(undefined);

const FrontendContext = ({ children }: { children: ReactNode }) => {
    return (
        <FrontendData.Provider value={undefined}>
            {children}
        </FrontendData.Provider>
    )
}

export default FrontendContext