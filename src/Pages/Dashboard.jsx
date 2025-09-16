import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import IntroBar from "../components/IntroBar";
import "../styles/dashboard.css";
import usersIcon from "../assets/icons/fa_users.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { useUser } from "../components/userContext";

const Dashboard = () => {
  const { userTable } = useUser();
  const total = userTable.length;
  const presentStaff = userTable.filter(
    (user) =>
      user.status.trim() === "Clocked in" ||
      user.status.trim() === "Clocked late"
  ).length;
  const absentStaff = userTable.filter(
    (user) => user.status === "Off today"
  ).length;

  const count = [
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: total,
    },
    {
      title: "No of Present Staff",
      img: usersIcon,
      staffCount: presentStaff,
    },
    {
      title: "No of Absent Staff",
      img: usersIcon,
      staffCount: absentStaff,
    },
    {
      title: "No of Staff on Leave",
      img: usersIcon,
      staffCount: 10,
    },
  ];
  const data = [
    { name: "Jan", attendance: 4000 },
    { name: "Feb", attendance: 3000 },
    { name: "Mar", attendance: 2000 },
    { name: "Apr", attendance: 2780 },
    { name: "May", attendance: 1890 },
    { name: "Jun", attendance: 2390 },
    { name: "Jul", attendance: 3490 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Define colors for slices

  const activity = [
    {
      action: "Amanda just clocked in",
      time: "9:00am Mon 16th Sept",
    },
    {
      action: "Amanda just clocked in",
      time: "9:00am Mon 16th Sept",
    },
    {
      action: "2 weeks leave approved for Deborah",
      time: "9:00am Mon 16th Sept",
    },
    {
      action: "Josh just clocked in",
      time: "9:00am Mon 16th Sept",
    },
  ];
  return (
    <div className="hero">
      <Header />
      <Sidebar />
      <IntroBar />

      <section className="dash">
        <div className="card-count">
          {count.map((countCard, index) => (
            <div className="dashboardCard">
              <div className="box" key={index}>
                <div className="box-img">
                  <img src={countCard.img} alt="" />
                </div>
                <div className="box-number">
                  <p>{countCard.title}</p>
                  <p className="number">{countCard.staffCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="charts">
          <div className="pieChart">
            <h2>Average Employee Attendance Rate</h2>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="attendance" // Key for the value of each slice
                  nameKey="name" // Key for the name/label of each slice
                  cx="50%" // X-coordinate of the center
                  cy="50%" // Y-coordinate of the center
                  outerRadius={150} // Outer radius of the pie
                  fill="#8884d8" // Default fill color
                  label // Display labels for each slice
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip /> {/* Displays data on hover */}
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="lineChart">
            <h2 className="m-3">Total Staff Attendance</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={data}
                // margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend fill="#e91be9" />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#e91be9"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="recents">
          <div>
            <h1>Recent Activities</h1>
          </div>
          {activity.map((log, index) => (
            <div className="logs" key={index}>
              <p>{log.action}</p>
              <p className="log-time">{log.time}</p>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
