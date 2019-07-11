export const createProject = (project) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        //make the asyn request to the database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Pratik',
            authorLastName: 'Sharma',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJET_ERROR', err});
        })
                
    }
}