import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Gap from "../../components/atoms/Gap";
import { storeOrder } from "../../redux/action/order";
import { getService } from "../../redux/action/service";
import { getUser } from "../../redux/action/user";

const Checkout = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService(id));
  }, [id]);

  const { service } = useSelector((state) => state.service);

  const navigate = useNavigate();

  const [paymentType, setPaymentType] = useState();
  const [validation, setValidation] = useState([]);

  const handleCheckout = (id) => {
    getUser()
      .then((res) => {
        const form = {
          service: JSON.stringify(service),
          user_id: res.data.id,
          payment_type: paymentType,
        };
        storeOrder(form)
          .then((res) => {
            alert(res.message);
            navigate(`/transactions`);
          })
          .catch((err) => {
            if (err.message === "validation failed") {
              alert(err.message);
              setValidation(err.data);
            } else {
              alert(err.message);
            }
          });
      })
      .catch((err) => {
        alert(err.message);
        navigate(`/login?subscribe=${id}`);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div>Checkout</div>
          <Gap height={10} />
          <div className="card rounded-0 shadow-sm">
            <div className="card-body">
              <div>Detail Langganan</div>
              <hr />
              <div>{service.name}</div>
              <div className="fw-bold">{service.total}</div>
              <span className="badge bg-warning">{service.discount}%</span>{" "}
              <small>
                <s>{service.price}</s>
              </small>
              <Gap height={10} />
              <select
                className="form-select rounded-0 shadow-sm"
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
              >
                <option value="">Pilih Pembayaran</option>
                <option value="bri">BRI</option>
                <option value="bca">BCA</option>
              </select>
              <div class="form-text text-danger">
                {validation?.payment_type}
              </div>
              <Gap height={10} />
              <button
                className="btn btn-success rounded-0 shadow-sm"
                onClick={() => handleCheckout(service.id)}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
