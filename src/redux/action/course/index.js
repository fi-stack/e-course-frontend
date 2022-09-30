import Api from "../../../api/Api";

const getCourse = (id) => (dispatch) => {
  Api.get(`/courses/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch({
        type: "GET_COURSE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getCourse };
