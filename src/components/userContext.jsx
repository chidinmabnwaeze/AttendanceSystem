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

const [attendanceTable, setAttendanceTable] = useState([
  // === Julius Gabriel (userId: 3476) ===
  { id: 1, userId: 3476, date: "2025-06-01", status: "Clocked in", timeClocked: "08:35" },
  { id: 2, userId: 3476, date: "2025-06-02", status: "Clocked late", timeClocked: "09:20" },
  { id: 3, userId: 3476, date: "2025-06-03", status: "Clocked in", timeClocked: "08:42" },
  { id: 4, userId: 3476, date: "2025-06-04", status: "Off today", timeClocked: "" },
  { id: 5, userId: 3476, date: "2025-06-05", status: "Clocked in", timeClocked: "08:30" },

  // === Ade Ola (userId: 2346) ===
  { id: 6, userId: 2346, date: "2025-06-01", status: "Clocked in", timeClocked: "08:50" },
  { id: 7, userId: 2346, date: "2025-06-02", status: "Clocked in", timeClocked: "08:45" },
  { id: 8, userId: 2346, date: "2025-06-03", status: "Off today", timeClocked: "" },
  { id: 9, userId: 2346, date: "2025-06-04", status: "Clocked late", timeClocked: "09:10" },
  { id: 10, userId: 2346, date: "2025-06-05", status: "Clocked in", timeClocked: "08:37" },

  // === James Bush(userId: 2763) ===
  { id: 11, userId: 2763, date: "2025-06-01", status: "Clocked late", timeClocked: "09:25" },
  { id: 12, userId: 2763, date: "2025-06-02", status: "Clocked in", timeClocked: "08:40" },
  { id: 13, userId: 2763, date: "2025-06-03", status: "Clocked in", timeClocked: "08:32" },
  { id: 14, userId: 2763, date: "2025-06-04", status: "Off today", timeClocked: "" },
  { id: 15, userId: 2763, date: "2025-06-05", status: "Clocked in", timeClocked: "08:29" },

  // === Kola Abioye (userId: 1347) ===
  { id: 16, userId: 1347, date: "2025-06-01", status: "Clocked in", timeClocked: "08:48" },
  { id: 17, userId: 1347, date: "2025-06-02", status: "Clocked late", timeClocked: "09:18" },
  { id: 18, userId: 1347, date: "2025-06-03", status: "Clocked in", timeClocked: "08:36" },
  { id: 19, userId: 1347, date: "2025-06-04", status: "Clocked in", timeClocked: "08:34" },
  { id: 20, userId: 1347, date: "2025-06-05", status: "Off today", timeClocked: "" },

    // === Onyeka Eze (userId: 1476) ===
  { id: 11, userId: 1476, date: "2025-06-01", status: "Clocked late", timeClocked: "09:25" },
  { id: 12, userId: 1476, date: "2025-06-02", status: "Clocked in", timeClocked: "08:40" },
  { id: 13, userId: 1476, date: "2025-06-03", status: "Clocked in", timeClocked: "08:32" },
  { id: 14, userId: 1476, date: "2025-06-04", status: "Off today", timeClocked: "" },
  { id: 15, userId: 1476, date: "2025-06-05", status: "Clocked in", timeClocked: "08:29" },

  // === Mary Onu (userId: 4761) ===
  { id: 6, userId: 4761, date: "2025-06-01", status: "Clocked in", timeClocked: "08:50" },
  { id: 7, userId: 4761, date: "2025-06-02", status: "Clocked in", timeClocked: "08:45" },
  { id: 8, userId: 4761, date: "2025-06-03", status: "Off today", timeClocked: "" },
  { id: 9, userId: 4761, date: "2025-06-04", status: "Clocked late", timeClocked: "09:10" },
  { id: 10, userId: 4761, date: "2025-06-05", status: "Clocked in", timeClocked: "08:37" },

    // === Stella Maris (userId: 2347) ===
  { id: 11, userId: 2347, date: "2025-06-01", status: "Clocked late", timeClocked: "09:25" },
  { id: 12, userId: 2347, date: "2025-06-02", status: "Clocked in", timeClocked: "08:40" },
  { id: 13, userId: 2347, date: "2025-06-03", status: "Clocked in", timeClocked: "08:32" },
  { id: 14, userId: 2347, date: "2025-06-04", status: "Off today", timeClocked: "" },
  { id: 15, userId: 2347, date: "2025-06-05", status: "Clocked in", timeClocked: "08:29" },

]);


// const status = ["Clocked in" , "Clocked late", "Off today"];
// const times = ["8:00am", "8:30am", "9:00am", "9:30am", "10:00am", "10:30am", ""]

// const attendanceRecords = [];

// const generateTable = ()=>{
// const randomStatus= staffTable.status[Math.floor(Math.random() * status.length)];
// const clockedTime = staffTable.time[Math.floor()]
// }

export const UserProvider = ({ children }) => {
  const [userTable, setUserTable] = useState(staffTable);

  return (
    <userContext.Provider value={{ userTable, setUserTable, attendanceTable, setAttendanceTable }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
