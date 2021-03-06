import * as counterActions from '../store/counter-actions';

export class CounterController{
    constructor($scope, $ngRedux){
        "ngInject"
        $ngRedux.connect(this.mapStateToThis, counterActions)(this);
        console.log("Constructor works!")
    }
    $onInit(){
        console.log("INIT Called")
    }

    mapStateToThis(state){
        return {
            counter : state.counter,
            res : state.result
        }
    }

    onIncrease(){
        this.onIncrement();
    }

    onDecrease(){
        // call action method
        this.onDecrement();
    }

    onAdd(value){
        this.onAddAction(value)
    }
}