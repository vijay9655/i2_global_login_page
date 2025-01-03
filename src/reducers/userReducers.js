export const FETCH_NOTES = "FETCH_NOTES";
export const ADD_NOTES = "ADD_NOTES";
export const UPDATE_NOTES = "UPDATE_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";
export const LOGIN_STATUS = "LOGIN_STATUS";



const initialState = {
    users: [],
    login:false,
    notebook:[]

};

export const userReducer = (state = initialState, action) => {


  switch (action.type) {
    case FETCH_NOTES:
        
      return { ...state,  users: action.payload };
    case LOGIN_STATUS:
      return { ...state, login:!state.login };
    
    case ADD_NOTES:

// return { ...state,  task: action.payload };
      return [...state,{...state.notebook,notebook:action.payload}]
    // case UPDATE_NOTES:
    //   return {state,task:action.payload}
    // case DELETE_NOTES:
    //   return {state,task:ac}
    // case FETCH_USERS_FAILURE:
    //   return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};
