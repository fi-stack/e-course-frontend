const stateAtom = {
  atom: {},
};

const atom = (state = stateAtom, action) => {
  if (action.type === "GET_ATOM") {
    return {
      ...state,
      atom: action.payload,
    };
  }

  return state;
};

export { atom };
