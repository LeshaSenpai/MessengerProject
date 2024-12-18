import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); 
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! You are logged in.</p>
    </div>
  );
};

export default Dashboard;
