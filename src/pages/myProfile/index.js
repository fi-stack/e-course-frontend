import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { convertToBase64 } from "../../redux/action/convertToBase64";
import { getUser, upload } from "../../redux/action/user";

const MyProfile = () => {
  const [user, setUser] = useState();
  // const [image, setImage] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => {
        alert(err.message);
        navigate("/login");
      });
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const image = await convertToBase64(file);

    const form = {
      image,
    };

    upload(form)
      .then((res) => {
        alert(res.message);
        getUser()
          .then((res) => setUser(res.data))
          .catch((err) => {
            alert(err.message);
            navigate("/login");
          });
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
      <div className="table-responsive">
        <table className="table table-bordered">
          <tr>
            <td>Foto</td>
            <td>:</td>
            <td>
              <img src={user?.image} className="img-thumbnail w-25" />
              <input
                type="file"
                className="form-control"
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
              <div class="form-text text-danger">{validation?.image}</div>
            </td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{user?.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <td>Tentang Saya</td>
            <td>:</td>
            <td>{user?.about_me}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>:</td>
            {user?.subscriber?.status === "active" ? (
              <td>
                {user?.subscriber?.status} | {user?.subscriber?.active_at}{" "}
                sampai {user?.subscriber?.expired_at}
              </td>
            ) : (
              <td>{user?.subscriber?.status}</td>
            )}
          </tr>
        </table>
      </div>
    </>
  );
};

export default MyProfile;
