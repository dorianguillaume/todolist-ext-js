Ext.define('todolist-ext-js.view.FormTaskController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formtask',
    views: ['todolistview'],

    

    onAddClick: function() {

        var date = new Date (Ext.getCmp('dateFinEstimated').getValue())
        var heure = Ext.getCmp('heureFinEstimated').getValue().getHours();
        var minute = Ext.getCmp('heureFinEstimated').getValue().getMinutes();
        date.setHours(heure);
        date.setMinutes(minute);

        var task = Ext.create('todolist-ext-js.model.Task', {
            content: Ext.getCmp('description').getValue(),
            datecreation: Ext.Date.format(new Date(), 'Y-m-d')+'T'+Ext.Date.format(new Date(), 'H:i:00'),
            dateend: Ext.Date.format(date, 'Y-m-d')+'T'+Ext.Date.format(date, 'H:i:00'),
            important: Ext.getCmp('important')._checked
        })
        var store = Ext.getStore('ToDoList')
        store.add(task)

        //Reload la vue avec la liste des tâches
        Ext.getCmp('todolistgrid').store.reload()
    }
})