import Api from "../../../api/Api";

const getUser = () => {
  return new Promise((resolve, reject) => {
    Api.get(`/users`, {
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

const storeRegister = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/register", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const activation = (token) => {
  return new Promise((resolve, reject) => {
    Api.get(`/activation?token=${token}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const storeLogin = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/login", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const storeForgotPassword = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/forgot-password", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const storeChangePassword = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/change-password", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const upload = (form) => {
  console.log(form);
  return new Promise((resolve, reject) => {
    Api.put(`/users/upload`, form, {
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

export {
  storeRegister,
  activation,
  storeLogin,
  storeForgotPassword,
  storeChangePassword,
  getUser,
  upload,
};
