angular.module("notesApp", [])
.controller("NoteController", function(){
    var self = this;
    self.items = [{
        id: 1, label: "", done: true
    }, {
        id: 1, label: "", done: true
    }]
    self.getDoneClass = function(item){
        return {
            finished : item.done,
            unfinished : !item.done
        }
    }
})