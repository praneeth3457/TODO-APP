const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT' : 
            return {
                ...state,
                counter : state.counter + 1
            } 
        case 'INCREMENT_10' : 
            return {
                ...state,
                counter : state.counter + 10
            } 
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[SUBSCRIPTION] : ', store.getState());
});

// Dispatching Actifon
store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'INCREMENT_10'});
console.log(store.getState());