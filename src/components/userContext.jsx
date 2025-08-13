import React, { useContext, createContext, useState, useEffect } from "react";
import userpic from "../assets/images/profile.png";

const userContext = createContext();

const staffTable = [
  {
    img: userpic,
    name: "Julius Gabriel",
    id: 3476,
    email: "example@gmail.com",
    role: "Frontend developer",
    time: "8:30am",
    status: "Clocked in",
    date: "2024-06-09",
  },
  {
    img: userpic,
    name: "Ade Ola",
    id: 2346,
    email: "example@gmail.com",
    role: "Frontend developer",
    time: "8:00am",
    status: "Clocked in",
    date: "2024-06-09",
  },

  {
    img: userpic,
    name: "James Bush",
    id: 2763,
    email: "example@gmail.com",
    role: "Backend developer",
    time: "9:30am",
    status: "Clocked late",
    date: "2024-06-09",
  },
  {
    img: userpic,
    name: "Kola Abioye",
    id: 1347,
    email: "example@gmail.com",
    role: "Frontend developer",
    time: "",
    status: "Off today",
    date: "2024-06-09",
  },
  {
    img: userpic,
    name: "Onyeka Eze",
    id: 1476,
    email: "example@gmail.com",
    role: "UI/UX Designer",
    time: "8:30am",
    status: "Clocked in",
    date: "2024-06-09",
  },
  {
    img: userpic,
    name: "Mary Onu",
    id: 4761,
    email: "example@gmail.com",
    role: "Frontend developer",
    time: "8:30am",
    status: "Clocked in",
    date: "2024-06-09",
  },
  {
    img: userpic,
    name: "Stella Maris",
    id: 2347,
    email: "example@gmail.com",
    role: "Frontend developer",
    time: "10:30am",
    status: "Clocked late",
    date: "2024-06-09",
  },
];

export const UserProvider = ({ children }) => {
  const [userTable, setUserTable] = useState(staffTable);

  return (
    <userContext.Provider value={{ userTable, setUserTable }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
