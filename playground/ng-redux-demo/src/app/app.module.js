import ngRedux from 'ng-redux';
import { createStore } from 'redux';
import {rootReducer } from './store/root-reducer';
import { CounterController} from "./controllers/counter-controller";

const store = createStore(rootReducer);

export default angular.module("counter-app", [ngRedux])

.config(function($ngReduxProvider){
    $ngReduxProvider.provideStore(store);
})

.component("appCounter",{
    templateUrl : "./app/views/counter.html",
    controller : CounterController
})