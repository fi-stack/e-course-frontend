import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInvoices } from "../../redux/action/invoice";

const InvoiceDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices(id));
  }, [dispatch]);

  const { invoices } = useSelector((state) => state.invoices);

  return <div>{invoices[0]?.invoice}</div>;
};

export default InvoiceDetail;
