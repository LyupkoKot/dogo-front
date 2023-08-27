import React, {createContext, useState, useEffect, useCallback} from "react";
import axios from "axios";
import {CookiesManagerContext} from "./cookiesManager";
import {useDispatch, useSelector} from "react-redux";
import {setOfferValue, setUserValue} from "../actions/setOfferValue";
const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const cookies = React.useContext(CookiesManagerContext)
    const userId = cookies.cookiesManager.getToken('x-auth-token')
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const setUserData = useCallback(val => dispatch(setUserValue(val)), [
        dispatch
    ]);
    const userData = useSelector(state => state.user)

    useEffect(() => {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/me`
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-auth-token': userId
            }
        })
            .then(res => res.json())
            .then(response => {
                setUser(response);
                response.ok && setUserData(response);

            })
            .catch(error => console.log(error));

    }, []);


    return <UserContext.Provider value={{user, userData, userId, setUserData}}>
        {children}
    </UserContext.Provider>;
};

export { UserContextProvider as default, UserContext };
