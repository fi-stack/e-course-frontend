const stateUserCourses = {
  user_courses: [],
};

const stateProgress = {
  progress: [],
};

const userCourses = (state = stateUserCourses, action) => {
  if (action.type === "GET_USER_COURSES") {
    return {
      ...state,
      user_courses: action.payload,
    };
  }

  return state;
};

export { userCourses };
