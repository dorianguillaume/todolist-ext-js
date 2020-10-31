Ext.define('todolist-ext-js.view.ToDoListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todolistcontroller',
   

    reloadAction: function() {
        this.getView().store.reload()
    },
    
})