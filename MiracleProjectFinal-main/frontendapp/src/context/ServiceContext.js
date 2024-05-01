import { createContext,useContext,useState } from "react";

export const ServiceContext=createContext();


export const ServiceContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    return (
        <ServiceContext.Provider value={{ login, setLogin }}>
            {children}
        </ServiceContext.Provider>
    );
};
const useContextApi=()=>{
    const Context=useContext(ServiceContext);
    return Context;
}
export default useContextApi;