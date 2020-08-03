const { createStore } = require('redux')

const defaultState = {
    isLogin: false,
    name: null,
    age: null
}

function userReducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogin: true,
                name: action.name,
                age: action.age,
            }
        case 'LOGOUT':
            return {
                ...defaultState
            }
        default:
            return state
    }
}

const store = createStore(userReducer)

export default store
