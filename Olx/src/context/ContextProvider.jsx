import { useState } from "react";
import MyContext from "./Mycontext";

const ContextProvider = ({ children }) => {
  const logState = 'LogOut'; // state to manage user login status
  const [name,setName]=useState('')
  return (
    <MyContext.Provider value={{ logState, name, setName }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
