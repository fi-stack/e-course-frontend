import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCertificate, getUserCourses } from "../../redux/action/userCourse";

const LearningComplete = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCourses(true));
  }, [dispatch]);

  const { user_courses } = useSelector((state) => state.userCourses);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>No.</th>
          <th>Kursus</th>
        </tr>
      </thead>
      <tbody>
        {user_courses?.map((value, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <a href={`/courses/${value.course.id}`}>{value.course.name}</a>
            </td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => dispatch(getCertificate(value.course.id))}
              >
                Cetak Sertifikat
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LearningComplete;
