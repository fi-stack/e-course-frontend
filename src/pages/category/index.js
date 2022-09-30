import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategory } from "../../redux/action/category";

const Category = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory(id));
  }, [id]);

  const { category } = useSelector((state) => state.category);
  return (
    <div className="container">
      <h1>Kursus</h1>
      <div className="row text-center">
        {category.courses?.map((value, index) => (
          <Link
            to={`/courses/${value.id}`}
            className="card col-lg-3 col-md-4 col-sm-6 m-2 shadow bg-body rounded"
            key={index}
          >
            <div className="card-body">
              <img src={value.image} style={{ maxWidth: 100 }} />
              <div>{value.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
