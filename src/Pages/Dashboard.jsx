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

const Dashboard = () => {
  const count = [
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
  ];
  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "Jun", sales: 2390 },
    { name: "Jul", sales: 3490 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Define colors for slices

  return (
    <div className="hero">
      <Header />
      <Sidebar />
      <IntroBar />

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
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="sales" // Key for the value of each slice
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
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
