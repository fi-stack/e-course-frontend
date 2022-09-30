import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gap from "../../components/atoms/Gap";
import { storeForgotPassword } from "../../redux/action/user";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [validation, setValidation] = useState();

  const formForgotPassword = (e) => {
    e.preventDefault();

    const form = { email };

    storeForgotPassword(form)
      .then((res) => {
        alert(res.message);
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
          <div className="text-center">Lupa Password</div>
          <Gap height={10} />
          <div className="card rounded-0 shadow-sm">
            <div className="card-body">
              <div>Masukkan email Anda untuk mencari akun Anda.</div>
              <hr />
              <form onSubmit={formForgotPassword}>
                <div class="mb-2">
                  <label class="form-label">Email</label>
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div class="form-text text-danger">{validation?.email}</div>
                </div>
                <Gap height={10} />
                <button
                  type="submit"
                  class="btn btn-success rounded-0 shadow-sm"
                >
                  Lupa Password
                </button>
                <Link
                  to="/login"
                  className="btn btn-secondary rounded-0 shadow-sm ms-1"
                >
                  Batal
                </Link>
              </form>
              <Gap height={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
