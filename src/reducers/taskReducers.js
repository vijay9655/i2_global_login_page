// Initial state for tasks
const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  // Action types
  const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
  const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
  const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
  
  // Reducer function
  export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TASKS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TASKS_SUCCESS:
        return {
          ...state,
          loading: false,
          tasks: action.payload,
        };
      case FETCH_TASKS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  // Action creators
  export const fetchTasksRequest = () => ({
    type: FETCH_TASKS_REQUEST,
  });
  
  export const fetchTasksSuccess = (tasks) => ({
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  });
  
  export const fetchTasksFailure = (error) => ({
    type: FETCH_TASKS_FAILURE,
    error,
  });
  