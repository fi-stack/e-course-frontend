import { combineReducers } from "redux";
import { categories, category } from "./category";
import { course } from "./course";
import { atom } from "./atom";
import { userCourses } from "./userCourse";
import { services, service } from "./service";
import { orders, order } from "./order";
import { invoices } from "./invoice";

const reducer = combineReducers({
  categories,
  category,
  course,
  atom,
  userCourses,
  services,
  service,
  orders,
  order,
  invoices,
});

export default reducer;
