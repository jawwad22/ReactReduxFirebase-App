export const createProject = (project) => {
  
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        //adding data to firestore
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'jawwad',
            authorLastName: 'Iqbal',
            authorId: 12345,
            createAt: new Date()
        }).then(() => {
            
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch((error) => {
           
            dispatch({
                type:'CREATE_PROJECT_ERROR',
                error
            })
        })


    }
};