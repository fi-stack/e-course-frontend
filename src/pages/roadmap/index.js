import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../redux/action/category";
import { storeUserCourse } from "../../redux/action/userCourse";
import Gap from "../../components/atoms/Gap";

const Roadmap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.categories);

  const [categoryActive, setCategoryActive] = useState();
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  const handleTakeCourse = (id) => {
    const form = {
      course_id: id,
    };

    storeUserCourse(form)
      .then((res) => {
        alert(res.message);
        navigate(`/courses/${id}`);
      })
      .catch((err) => {
        alert(err.message);
        navigate(`/login?courses=${id}`);
      });
  };

  return (
    <>
      <div className="container">
        <div>Pilih Alur Belajar</div>
        <Gap height={10} />
        <div className="row text-center">
          {categories.map((value, index) => (
            <div className="col mb-2" key={index}>
              {categoryActive === value.id ? (
                <a
                  href="#"
                  className="bg-light card rounded-0 shadow-sm"
                  onClick={() => {
                    setCourses(value.courses);
                    setCategoryActive(value.id);
                  }}
                >
                  <div className="card-body">
                    <img src={value.image} style={{ maxWidth: 100 }} />
                    <div>{value.name}</div>
                  </div>
                </a>
              ) : (
                <a
                  href="#"
                  className="card rounded-0 shadow-sm"
                  onClick={() => {
                    setCourses(value.courses);
                    setCategoryActive(value.id);
                  }}
                >
                  <div className="card-body">
                    <img src={value.image} style={{ maxWidth: 100 }} />
                    <div>{value.name}</div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
        <hr />
        {courses?.map((value, index) => (
          <div className="card rounded-0 shadow-sm mb-2">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <div>Tahap {value.ordinal}</div>
                  <div>{value.name}</div>
                  {value.is_subscriber ? (
                    <span className="badge bg-warning rounded-0">Premium</span>
                  ) : (
                    <span className="badge bg-success rounded-0">Gratis</span>
                  )}
                </div>
                <div className="align-self-center">
                  <button
                    className="btn btn-success rounded-0 shadow-sm"
                    onClick={() => handleTakeCourse(value.id)}
                  >
                    Mulai Belajar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roadmap;
