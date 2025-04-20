import MyContext from "./Mycontext";

const ContextProvider = ({ children }) => {
  const logState = 'logOut'; // state to manage user login status

  return (
    <MyContext.Provider value={{ logState }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
