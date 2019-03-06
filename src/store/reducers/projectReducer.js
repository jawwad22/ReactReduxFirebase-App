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
 }
    return state
}

export default projectReducer