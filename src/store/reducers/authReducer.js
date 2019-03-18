const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('signout success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer