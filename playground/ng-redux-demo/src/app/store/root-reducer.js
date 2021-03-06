import * as counterActions from './counter-actions';

const initialState = {
    counter: 0,
    result: []
}
export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case counterActions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case counterActions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case counterActions.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case counterActions.STORE_RESULT:
            return {
                ...state,
                result: [...state.result, state.counter] //state.result.push(state.counter)
            }
        default:
            return state;
    }

}
