Ext.define('todolist-ext-js.view.ToDoListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todolistcontroller',
   

    deleteTask: function() {
        var grid = Ext.getCmp('todolistgrid');
        var selection = grid.getSelection();

        if(selection == undefined){
            alert('Il faut sélectionner la ligne avant de vouloir la supprimer..')
        } else {
            var id = selection.data.id
            var content = selection.data.content
            var dateCreation = selection.data.dateCreation
            var dateEnd = selection.data.dateEnd
            var important = selection.data.important

            Ext.Ajax.request({
                url: 'https://localhost:5001/api/Task/'+id,
                method: 'DELETE',
                jsonData: {
                    'id': id,
                    'content': content,
                    'dateCreation': dateCreation,
                    'dateEnd': dateEnd,
                    'important': important
                },
                success: function (result, request) {
                    grid.store.reload()
                }
            });
        }
    },
    
})