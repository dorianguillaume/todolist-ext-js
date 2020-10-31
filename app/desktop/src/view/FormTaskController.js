Ext.define('todolist-ext-js.view.FormTaskController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formtask',
    views: ['todolistview'],

    

    onAddClick: function() {
        var task = Ext.create('todolist-ext-js.model.Task', {
            content: 'New task',
            date: Ext.Date.format(new Date(), 'Y-m-d'),
            done: false,
        })
        console.log(task);

        var store = Ext.getStore('ToDoList') 
        store.add(task)    

    },
    
})