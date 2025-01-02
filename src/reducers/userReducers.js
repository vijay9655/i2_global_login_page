export const FETCH_NOTES = "FETCH_NOTES";
export const ADD_NOTES = "ADD_NOTES";
export const UPDATE_NOTES = "UPDATE_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";

const initialState = {
    users: [],

};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state,  users: action.payload };
    // case FETCH_USERS_SUCCESS:
    //   return { loading: false, users: action.payload, error: "" };
    // case FETCH_USERS_FAILURE:
    //   return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};
