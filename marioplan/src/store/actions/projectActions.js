export const createProject = (project) => {
    return(dispatch, getState) => {
        //make the asyn request to the database
        dispatch({type: "CREATE_PROJECT", project});
        
    }
}