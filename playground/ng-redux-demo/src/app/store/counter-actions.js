export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const STORE_RESULT = "STORE_RESULT"; 

// Action creators
export function onResultStore(){
    return {
        type : STORE_RESULT
    }
}

export function onIncrement(){
    console.log("ACTION - INCREMENT")
    return {
        type : INCREMENT
    }
}

export function onDecrement(){
    console.log("ACTION - DECREMENT")
    return {
        type : DECREMENT
    }
}

export function onAddAction(value){
    return {
        type : ADD_COUNTER,
        value
    }
}


// Thunk Action Creator
export function asyncIncrement(){
    return function(dispatch, getState){
        // write any async code here
        setTimeout(function(){
            dispatch(onIncrement());
        }, 3000);
    }
}
