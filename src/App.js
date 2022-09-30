import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalApp from "./layouts/GlobalApp";
import MainApp from "./layouts/MainApp";
import AccountActivation from "./pages/accountActivation";
import Category from "./pages/category";
import ChangePassword from "./pages/changePassword";
import Checkout from "./pages/checkout";
import Course from "./pages/course";
import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgotPassword";
import Home from "./pages/home";
import InvoiceDetail from "./pages/invoiceDetail";
import LearningComplete from "./pages/learningComplete";
import LearningProgress from "./pages/learningProgress";
import Login from "./pages/login";
import MyProfile from "./pages/myProfile";
import OrderDetail from "./pages/orderDetail";
import Register from "./pages/register";
import Roadmap from "./pages/roadmap";
import Subscribe from "./pages/subscribe";
import Transaction from "./pages/transaction";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<GlobalApp />}>
              <Route index element={<Home />} />
              <Route path="roadmaps" element={<Roadmap />} />
              <Route path="subscribe">
                <Route index element={<Subscribe />} />
                <Route path=":id/checkout" element={<Checkout />} />
              </Route>
              <Route path="register" element={<Register />} />
              <Route
                path="account-activation"
                element={<AccountActivation />}
              />
              <Route path="login" element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
            <Route path="*" element={<MainApp />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="my-profile" element={<MyProfile />} />
            </Route>
            <Route path="transactions" element={<MainApp />}>
              <Route index element={<Transaction />} />
              <Route path="orders/:id" element={<OrderDetail />} />
              <Route path="orders/:id/invoices" element={<InvoiceDetail />} />
            </Route>
            <Route path="learning" element={<MainApp />}>
              <Route path="progress" element={<LearningProgress />} />
              <Route path="complete" element={<LearningComplete />} />
            </Route>
            <Route path="categories">
              <Route path=":id" element={<Category />} />
            </Route>
            <Route path="courses">
              <Route path=":id" element={<Course />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
