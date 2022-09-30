import Api from "../../../api/Api";

const getAtomByOrdinal = (id, ordinal) => (dispatch) => {
  Api.get(`/atoms/${id}/ordinal/${ordinal}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_ATOM",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getAtomByOrdinal };
