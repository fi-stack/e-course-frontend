import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../redux/action/user";

const Dashboard = () => {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => {
        alert(err.message);
        navigate("/login");
      });
  }, []);

  return (
    <>
      <h1>Hello, {user?.name}</h1>
      {user?.subscriber?.status === "active" ? (
        <div>Status : {user?.subscriber?.status}</div>
      ) : (
        <div>
          Anda belum berlangganan klik <Link to="/subscribe">disini</Link> untuk
          mulai langganan
        </div>
      )}
    </>
  );
};

export default Dashboard;
