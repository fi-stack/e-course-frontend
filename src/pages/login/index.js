import { useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import Gap from "../../components/atoms/Gap";
import { storeLogin } from "../../redux/action/user";

const Login = () => {
  const [searchParams] = useSearchParams();
  const subscribe = searchParams.get("subscribe");
  const courses = searchParams.get("courses");

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const formLogin = (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
    };

    storeLogin(form)
      .then((res) => {
        alert(res.message);
        localStorage.setItem("token", res.data);
        if (subscribe) {
          navigate(`/subscribe/${subscribe}/checkout`);
        } else if (courses) {
          navigate(`/courses/${courses}`);
        } else {
          navigate("/dashboard");
        }
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
            <div className="text-center">Masuk</div>
            <Gap height={10} />
            <div className="card rounded-0 shadow-sm">
              <div className="card-body">
                <form onSubmit={formLogin}>
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
                    Masuk
                  </button>
                </form>
                <Gap height={10} />
                <hr />
                <div>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Belum Punya Akun?
                  </Link>
                </div>
                <div>
                  <Link
                    to="/forgot-password"
                    style={{ textDecoration: "none" }}
                  >
                    Lupa Password?
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

export default Login;
