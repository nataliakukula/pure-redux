const { createStore } = require("redux");

const defaultState = { age: 21 };

// it takes state and the action
const reducer = (state = defaultState, action) => {
    //make a copy of the state
    const newState = { ...state };

    if (action.type === "ADD") {
        newState.age += action.value;
    } else if (action.type === "SUBSTRACT") {
        newState.age -= 1;
    }
    return newState;
};

//"global object" where we "store" our state
//it has a state and it takes in from a reducer
const store = createStore(reducer);

//You can subscribe to the state change, so whenever it does change it console.logs
store.subscribe(() => {
    console.log("State change: ", store.getState())
});
// In order to change the age we need to "dispatch" an action to the store
// an action is just an object that has a type and payload (data) 
// by which it gets matched to it's reducer 
// inside of the reducer we specify what this actually means
// const action = { type: "ADD" };
store.dispatch({ type: "ADD", value: 1 });
store.dispatch({ type: "SUBSTRACT" });
