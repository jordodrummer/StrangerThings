// import { createContext, useReducer } from "react";
// import authReducer from './AuthReducer'


// const AuthContext = createContext();

// export const AuthProvider = ({children}) => {å
//     const token = JSON.parse(localStorage.getItem('token'));

//     const initialState = {
//         token: token ? token : null,
//         message: '',
//     };

//     const [state, dispatch] = useReducer(authReducer, initialState);

//     return (
//         <AuthContext.Provider value={{...state, dispatch}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext