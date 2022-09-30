import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserCourses } from "../../redux/action/userCourse";

const LearningProgress = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCourses());
  }, [dispatch]);

  const { user_courses } = useSelector((state) => state.userCourses);

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Kursus</th>
            <th>Progress</th>
            <th>Status</th>
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
                {value.progress} / {value.course_atoms_count}
              </td>
              <td>{value.is_completed ? "Selesai" : "Sedang Belajar"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/roadmaps">Alur Belajar</Link>
    </>
  );
};

export default LearningProgress;
