import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Gap from "../../components/atoms/Gap";
import { storeChangePassword } from "../../redux/action/user";

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const formChangePassword = (e) => {
    e.preventDefault();

    const form = { password, token };

    storeChangePassword(form)
      .then((res) => {
        alert(res.message);
        navigate("/login");
      })
      .catch((err) => {
        if (err.message === "validation failed") {
          alert(err.message);
          setValidation(err.data);
        } else {
          alert(err.message);
        }
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="text-center">Ubah Password</div>
          <Gap height={10} />
          <div className="card rounded-0 shadow-sm">
            <div className="card-body">
              <form onSubmit={formChangePassword}>
                <div class="mb-2">
                  <label class="form-label">Password Baru</label>
                  <input
                    type="password"
                    class="form-control rounded-0 shadow-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div class="form-text text-danger">
                    {validation?.password}
                  </div>
                </div>
                <Gap height={10} />
                <button
                  type="submit"
                  class="btn btn-success rounded-0 shadow-sm"
                >
                  Ubah Password
                </button>
              </form>
              <Gap height={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
