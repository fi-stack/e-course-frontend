import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../redux/action/order";

const Transaction = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const { orders } = useSelector((state) => state.orders);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Servis</th>
              <th>Jenis Pembayaran</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.service.name}</td>
                <td>{value.payment_type}</td>
                <td>{value.status}</td>
                <td>
                  <Link
                    to={`/transactions/orders/${value.id}`}
                    className="btn btn-info"
                  >
                    Lihat Detail
                  </Link>
                  <Link
                    to={`/transactions/orders/${value.id}/invoices`}
                    className="btn btn-success"
                  >
                    Lihat Invoice
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transaction;
