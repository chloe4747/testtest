const { createStore } = require('redux')

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter)
  
store.subscribe(() => console.log(store.getState()))
  
setTimeout(() => {
    store.dispatch({ type: 'INCREMENT' })
}, 1000)

setTimeout(() => {
    store.dispatch({ type: 'INCREMENT' })
}, 2000)

setTimeout(() => {
    store.dispatch({ type: 'DECREMENT' })
}, 3000)
