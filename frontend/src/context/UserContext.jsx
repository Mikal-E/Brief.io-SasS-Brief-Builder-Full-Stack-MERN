import { createContext, useContext, useState } from "react";

/* UserContext holds user and a setUser updater, initialized from localStorage. updateUser merges new fields, example: like avatarUrl, into the existing user object
and keeps localStorage in sync automatically. Settings.jsx won't need to touch localStorage directly anymore and changes like avatarUrl will update instantly across components without a page reload. */

const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState(() => {

        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;

    });

    function updateUser(updatedFields) {

        setUser((prevUser) => {

            const newUser = { ...prevUser, ...updatedFields };
            localStorage.setItem("user", JSON.stringify(newUser));
            return newUser;

        });

    }

    return (

        <UserContext.Provider value={{ user, setUser, updateUser }}>

            {children}

        </UserContext.Provider>

    );

}

export function useUser() {

    return useContext(UserContext);

}