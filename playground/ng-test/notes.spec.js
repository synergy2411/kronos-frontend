// Test suite
describe("Notes App : NoteContoller ", () => {

    let ctrl;
    beforeEach(module("notesApp"))
    
    beforeEach(inject(function ($controller) {
        ctrl = $controller("NoteController");
    }))

    it("Should have items available", () => {
        let items = [{
            id: 1, label: "", done: true
        }, {
            id: 1, label: "", done: true
        }]
        expect(ctrl.items).toEqual(items);
    })

    it("Should have items based on state", () => {
        let item = {id : 1, label : "", done : true};
        let actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeTruthy();
        expect(actualClass.unfinished).toBeFalsy();

        item.done = false;
        actualClass = ctrl.getDoneClass(item);
        expect(actualClass.finished).toBeFalsy();
        expect(actualClass.unfinished).toBeTruthy();
    })

})