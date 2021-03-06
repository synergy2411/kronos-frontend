export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function onIncrement(){
    console.log("ACTION - INCREMENT")
    return {
        type : INCREMENT
    }
}

export function onDecrement(){
    return {
        type : DECREMENT
    }
}