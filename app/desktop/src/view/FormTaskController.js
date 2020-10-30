Ext.define('todolist-ext-js.view.FormTaskController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formtask',

    onAddClick: function() {
        var task = Ext.create('todolist-ext-js.model.Task', {
            task: 'new',
            date: new Date(),
            done: false,
        })
        var store = Ext.getStore('ToDoList')
        
        

    }
})