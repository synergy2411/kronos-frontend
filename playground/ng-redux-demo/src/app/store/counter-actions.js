export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";

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