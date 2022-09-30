import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activation } from "../../redux/action/user";

const AccountActivation = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const accountActivation = (token) => {
    activation(token)
      .then((res) => {
        alert(res.message);
        navigate("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      Aktivasi Akun Anda dengan klik{" "}
      <button
        className="btn btn-success"
        onClick={() => accountActivation(token)}
      >
        Aktivasi
      </button>
    </div>
  );
};

export default AccountActivation;
