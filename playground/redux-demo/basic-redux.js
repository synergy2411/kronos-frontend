const { createStore } = require("redux");

// - Reducer
const initialSatte = {
    counter : 10
}

function rootReducer(state = initialSatte, action){
    if(action.type === "INCREMENT"){
        // return state.counter++
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - action.data
        }
    }
    return state;
}
// - Store - getState(), dispatch(), subscribe()
const store = createStore(rootReducer);
// console.log(store.getState());

store.subscribe(function(){
    console.log("SUBS - ", store.getState());
})

// - Actions
store.dispatch({type : "INCREMENT"})
store.dispatch({type : "DECREMENT", data : 5})
// console.log("ACTION - INCREMENT", store.getState());