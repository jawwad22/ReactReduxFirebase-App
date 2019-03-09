const initState = {
    projects: [
        {
            id: '1', title: 'help me find peach', content: 'blah blah blah'
        }, {
            id: '1', title: 'help me find peach', content: 'blah blah blah'

        }, {
            id: '1', title: 'help me find peach', content: 'blah blah blah'
        }
    ]
}

const projectReducer = (state = initState, action) => {
 switch (action.type) {
     case 'CREATE_PROJECT':
         console.log('created project',action.project)
         break;
         
         case 'CREATE_PROJECT_ERROR':
         console.log('create project error',action.error);
         return state
         default:
         return state
 }
}

export default projectReducer