import ngRedux from 'ng-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './store/root-reducer';
import { CounterController } from "./controllers/counter-controller";

const store = createStore(rootReducer);

const logger = store => next => action => {
    console.log("ACTION - ", action);
    console.log("STATE - ", store.getState());
    return next(action)
};

// function logger1(store){
//     return function(next){
//         return function(action){
//             // code to write
//         }
//     }
// }

export default angular.module("counter-app", [ngRedux])
    .config(function ($ngReduxProvider) {
        $ngReduxProvider.provideStore(store, [logger, thunk], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
    })

    .component("appCounter", {
        templateUrl: "./app/views/counter.html",
        controller: CounterController
    })