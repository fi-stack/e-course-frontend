const stateCourse = {
  course: {},
};

const course = (state = stateCourse, action) => {
  if (action.type === "GET_COURSE") {
    return {
      ...state,
      course: action.payload,
    };
  }

  return state;
};

export { course };
