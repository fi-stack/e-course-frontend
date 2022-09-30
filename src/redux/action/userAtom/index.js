import Api from "../../../api/Api";

const storeUserAtom = (form) => {
  return new Promise((resolve, reject) => {
    Api.post(`/user-atoms`, form, {
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

export { storeUserAtom };
