const stateCategories = {
  categories: [],
};

const stateCategory = {
  category: {},
};

const categories = (state = stateCategories, action) => {
  if (action.type === "GET_CATEGORIES") {
    return {
      ...state,
      categories: action.payload,
    };
  }

  return state;
};

const category = (state = stateCategory, action) => {
  if (action.type === "GET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }

  return state;
};

export { categories, category };
