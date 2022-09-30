import Api from "../../../api/Api";

const storeUserCourse = (form) => {
  return new Promise((resolve, reject) => {
    Api.post(`/user-courses`, form, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const getUserCourses =
  (isCompleted = "") =>
  (dispatch) => {
    Api.get(`/user-courses?is_completed=${isCompleted}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => {
        dispatch({
          type: "GET_USER_COURSES",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

const getCertificate = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    Api.post(
      `/user-courses/certificate?course_id=${id}`,
      {},
      {
        responseType: "blob",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
      .then((res) => {
        resolve(res.data);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `certificate.pdf`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export { storeUserCourse, getUserCourses, getCertificate };
