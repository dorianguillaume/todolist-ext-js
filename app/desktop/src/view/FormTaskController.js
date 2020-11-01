Ext.define('todolist-ext-js.view.FormTaskController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formtask',
    views: ['todolistview'],

    

    onAddClick: function() {
        var task = Ext.create('todolist-ext-js.model.Task', {
            content: Ext.getCmp('task').getValue(),
            date: Ext.Date.format(new Date(), 'Y-m-d'),
            done: false,
        })
        var store = Ext.getStore('ToDoList')
        store.add(task)

        //Reload la vue avec la liste des tâches
        Ext.getCmp('todolistgrid').store.reload()
        },
    
})