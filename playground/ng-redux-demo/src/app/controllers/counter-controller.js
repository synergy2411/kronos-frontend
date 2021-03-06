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
            ctr : state.counter,
            res : state.result
        }
    }
    // onStoreResult(){
    //     this.onResultStore();
    // }

    onIncrease(){
        // this.onIncrement();
        this.asyncIncrement();
    }

    onDecrease(){
        this.onDecrement();
    }

    onAdd(value){
        this.onAddAction(value)
    }
}