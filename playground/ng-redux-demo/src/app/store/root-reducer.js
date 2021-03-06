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
        default:
            break;
    }
    return state;
}