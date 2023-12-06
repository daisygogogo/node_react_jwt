
import { createContext,useState,useContext } from "react";
import { userLogin } from "../api/auth-api";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("user") || null);

    const login = async(inputs) => {
        const res = await userLogin(inputs);
        setCurrentUser(res);
        localStorage.setItem('user',res)
    }

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
          {children}
        </AuthContext.Provider>
      );
}

export const useAuth = () => {

    const authContext = useContext(AuthContext);
  
    if (!authContext) {
      throw new Error("useAuth must be used within an AuthContextProvider");
    }
    const { currentUser, login } = authContext;
  
    return { currentUser, login };

};