import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-success">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li>
            <Link to="/dashboard" class="nav-link px-0 align-middle text-white">
              <i class="fs-4 bi-speedometer"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li>
            <a
              href={`#submenu1`}
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle text-white"
            >
              <i class="fs-4 bi-book-half"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">Proses Belajar</span>
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id={`submenu1`}
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <Link to="/learning/progress" class="nav-link px-0 text-white">
                  <i class="bi bi-circle"></i>{" "}
                  <span class="d-none d-sm-inline">Sedang Dipelajari</span>
                </Link>
              </li>
              <li class="w-100">
                <Link to="/learning/complete" class="nav-link px-0 text-white">
                  <i class="bi bi-circle"></i>{" "}
                  <span class="d-none d-sm-inline">Telah Diselesaikan</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/transactions"
              class="nav-link px-0 align-middle text-white"
            >
              <i class="fs-4 bi-receipt"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">Transaksi</span>
            </Link>
          </li>
          <li>
            <a
              href={`#submenu2`}
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle text-white"
            >
              <i class="fs-4 bi-person"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">Akun</span>
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id={`submenu2`}
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <Link to="/my-profile" class="nav-link px-0 text-white">
                  <i class="bi bi-circle"></i>{" "}
                  <span class="d-none d-sm-inline">My Profile</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              class="nav-link px-0 align-middle text-white"
              onClick={() => {
                localStorage.removeItem("token");
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              }}
            >
              <i class="fs-4 bi-box-arrow-left"></i>{" "}
              <span class="ms-1 d-none d-sm-inline">Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
