import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Check if there's a 'user' object in localStorage
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : {
            userId: null,
            email: null,
            role: null
        };
    });

    // Update localStorage whenever 'user' changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

