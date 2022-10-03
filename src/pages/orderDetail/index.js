import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { convertToBase64 } from "../../redux/action/convertToBase64";
import { getOrder, upload } from "../../redux/action/order";

const OrderDetail = () => {
  const { id } = useParams();

  const [image, setImage] = useState();
  const [validation, setValidation] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(id));
  }, [id]);

  const { order } = useSelector((state) => state.order);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const uploadImage = () => {
    const form = {
      image,
    };

    upload(form, id)
      .then((res) => {
        alert(res.message);
        dispatch(getOrder(id));
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
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered">
            <tr>
              <td>Service</td>
              <td>:</td>
              <td>{order.service?.name}</td>
            </tr>
            <tr>
              <td>Harga</td>
              <td>:</td>
              <td>
                <s>{order.service?.price}</s>
              </td>
            </tr>
            <tr>
              <td>Diskon</td>
              <td>:</td>
              <td>{order.service?.discount}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>:</td>
              <td>{order.service?.total}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>:</td>
              <td>{order.status}</td>
            </tr>
          </table>
          <div>
            Silahkan melakukan pembayaran ke {order.payment_type} sebelum{" "}
            <b>{order.expired_at}</b> sisa <b>{order.left_at}</b>
          </div>
          <div>Bukti Pembayaran:</div>
          <img src={`${order.image}`} className="img-thumbnail w-25" />
          <div>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Unggah Bukti Pembayaran
            </button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Unggah Bukti Pembayaran
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="file"
                className="form-control"
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
              <div class="form-text text-danger">{validation?.image}</div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={uploadImage}
              >
                Unggah
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
