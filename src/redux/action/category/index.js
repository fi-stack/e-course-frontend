import Api from "../../../api/Api";

const getCategories = () => (dispatch) => {
  Api.get("/categories")
    .then((res) => {
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getCategory = (id) => (dispatch) => {
  Api.get(`/categories/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_CATEGORY",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export { getCategories, getCategory };
