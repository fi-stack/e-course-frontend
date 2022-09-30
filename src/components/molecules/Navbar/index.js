import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../../redux/action/user";

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
      <div class="container">
        <Link to="/" class="navbar-brand">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/roadmaps" class="nav-link">
                Alur Belajar
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/subscribe" class="nav-link">
                Langganan
              </Link>
            </li>
            {user ? (
              <li class="nav-item">
                <Link to="/dashboard" class="nav-link">
                  {user.name}
                </Link>
              </li>
            ) : (
              <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
