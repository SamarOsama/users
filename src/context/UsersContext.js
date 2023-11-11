import React, { createContext, useEffect, useState } from 'react'
import { getUsers } from '../services/UsersService'


let UsersContext = createContext()
export function UsersContextProvider(props) {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
        getAllUsersOnStartUp()
    }, [])


    const getAllUsersOnStartUp = async () => {
        const response = await getUsers()
        console.log(response.data.data);
        setUsersList(response.data.data)
    }

    return (

        <UsersContext.Provider value={{ usersList, getAllUsersOnStartUp }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext