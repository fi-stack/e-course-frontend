import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAtomByOrdinal } from "../../redux/action/atom";
import { getCourse } from "../../redux/action/course";
import { getUser } from "../../redux/action/user";
import { storeUserAtom } from "../../redux/action/userAtom";

const Course = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse(id));
    getUser()
      .then()
      .catch((err) => {
        alert(err.message);
        navigate("/login");
      });
  }, [id]);

  const { course } = useSelector((state) => state.course);
  const { atom } = useSelector((state) => state.atom);

  useEffect(() => {
    if (course.user_courses?.length === 0) {
      alert("anda belum mengikuti kelas ini");
      navigate("/dashboard");
    }
  }, [course]);

  const handleUserAtom = (atomId) => {
    const form = {
      atom_id: atomId,
    };

    storeUserAtom(form)
      .then((res) => {
        alert(res.message);
        dispatch(getAtomByOrdinal(res.data.id, res.data.ordinal));
        dispatch(getCourse(id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <Link
                  to="/dashboard"
                  class="nav-link px-0 align-middle text-white"
                >
                  <i class="fs-4 bi-speedometer"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              {course.molecules?.map((value, index) => (
                <li key={index}>
                  <a
                    href={`#submenu${value.ordinal}`}
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle text-white"
                  >
                    <i class="fs-4 bi-folder"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">{value.name}</span>
                  </a>
                  <ul
                    class="collapse nav flex-column ms-1"
                    id={`submenu${value.ordinal}`}
                    data-bs-parent="#menu"
                  >
                    {value.atoms?.map((v, i) => (
                      <li class="w-100" key={i}>
                        <a
                          href="#"
                          class="nav-link px-0 text-white"
                          onClick={() =>
                            dispatch(getAtomByOrdinal(v.id, v.ordinal))
                          }
                        >
                          {v.user_atoms.length ? (
                            <>
                              {i + 1}{" "}
                              <span class="d-none d-sm-inline">{v.title}</span>{" "}
                              <i class="fs-4 bi-check-circle text-success"></i>
                            </>
                          ) : (
                            <>
                              {i + 1}{" "}
                              <span class="d-none d-sm-inline">{v.title}</span>
                            </>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="col py-3">
          <h3>{atom?.title}</h3>
          <button
            className="btn btn-primary"
            onClick={() => handleUserAtom(atom.id)}
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
