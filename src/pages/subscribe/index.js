import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getServices } from "../../redux/action/service";
import { getUser } from "../../redux/action/user";
import Gap from "../../components/atoms/Gap";

const Subscribe = () => {
  const [user, setUser] = useState();
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => {});
    dispatch(getServices());
  }, [dispatch]);

  const { services } = useSelector((state) => state.services);

  return (
    <div className="container">
      <div>Pilih Paket</div>
      <Gap height={10} />
      {!user || user?.subscriber?.status === "expired" ? (
        <div className="row">
          {services?.map((value, index) => (
            <div className="col mb-2" key={index}>
              <div className="card rounded-0 shadow-sm">
                <div className="card-body">
                  <div>{value.name}</div>
                  <div className="fw-bold">{value.total}</div>
                  <span className="badge bg-warning">
                    {value.discount}%
                  </span>{" "}
                  <small>
                    <s className="text-muted">{value.price}</s>
                  </small>
                  <Gap height={10} />
                  <Link
                    to={`/subscribe/${value.id}/checkout`}
                    className="btn btn-success rounded-0 shadow-sm"
                  >
                    Pilih Paket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          Terimakasih sudah berlangganan klik{" "}
          <Link to="/learning/progress">disini</Link> untuk lanjut belajar
        </div>
      )}
    </div>
  );
};

export default Subscribe;
