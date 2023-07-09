export const initialState = { count: 1 };

function reducer(state, action) {
//   console.log(action, "action");

  switch (action.type) {
    case "incremented_count": {
      return {
        count: state.count + 1,
      };
    }

    case "decremented_count": {
      return {
        count: state.count - 1,
      };
    }
  }
  throw Error("Unknown Action" + action.type);
}

export default reducer;
