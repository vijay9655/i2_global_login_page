import { ADD_NOTES } from "../../reducers/userReducers"


export const setUsers = (usersData) => {
    return {
      type: 'FETCH_NOTES',
      payload: usersData,  // Data to be assigned to users
    };
  };
  
  export const setTasks = (taskData) => {
    return {
      type: ADD_NOTES,
      payload: taskData,  // Data to be assigned to tasks
    };
  };

export  const Onsave=(data,btn,dispatch,task,content,count)=>{
    let configdata={
        id:count,
        task:task,
        content:content
    }
  

    dispatch({
        type: ADD_NOTES,
        payload: configdata,  // Ensure payload is valid
      });
}