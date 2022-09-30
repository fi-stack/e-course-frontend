import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Gap from "../../components/atoms/Gap";
import { storeRegister } from "../../redux/action/user";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const formRegister = (e) => {
    e.preventDefault();

    const form = {
      name,
      email,
      password,
    };

    storeRegister(form)
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
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="text-center">Daftar</div>
            <Gap height={10} />
            <div className="card rounded-0 shadow-sm">
              <div className="card-body">
                <form onSubmit={formRegister}>
                  <div class="mb-2">
                    <label class="form-label">Nama</label>
                    <input
                      type="text"
                      class="form-control rounded-0 shadow-sm"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div class="form-text text-danger">{validation?.name}</div>
                  </div>
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
                  <div class="mb-2">
                    <label class="form-label">Password</label>
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
                    Register
                  </button>
                </form>
                <Gap height={10} />
                <hr />
                <div>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Sudah Punya Akun?
                  </Link>
                </div>
                <Gap height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
