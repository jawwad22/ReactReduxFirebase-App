export const createProject = (project) => {
    console.log('projectAction=>createProject-Runing')
    console.log('--------------')
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
            console.log('Sucesss')
            console.log('-------------')

            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch((error) => {
            console.log('error')
            console.log('-------------')
            dispatch({
                type:'CREATE_PROJECT_ERROR',
                error
            })
        })


    }
};