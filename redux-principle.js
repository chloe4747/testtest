function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                age: state.age + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                age : state.age - 1
            }
        default:
            return state
    }    
}

class Store {
    constructor(reducer){
        this.listeners = []
        this.reducer = reducer
        this.state = {
            name: "둘리",
            age: 0,
        }
    }

    dispatch(action) {
        const newState = this.reducer(this.state, action)
        console.log('prevState :', this.state)
        this.state = newState
        console.log('nextState :', this.state)
        this.listeners.forEach(listener => listener())
    }

    subscribe(fn) {
        this.listeners.push(fn)
    }

    getState() {
        return this.state
    }

}

const store = new Store(reducer)

store.subscribe(() => { console.log("구독함수!", store.getState()) })
store.subscribe(() => { console.log("구독함수!1") })
store.subscribe(() => { console.log("구독함수!2") })
store.subscribe(() => { console.log("구독함수!3") })

setTimeout(() => {
    store.dispatch({ type: "INCREMENT" })
}, 1000)