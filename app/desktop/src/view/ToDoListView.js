Ext.define('todolist-ext-js.view.ToDoListView', {
    extend: 'Ext.grid.Grid',
    xtype: 'todolistview',
    title: 'ToDo List',
    store: {type: 'todolist'},
    height: 400,
    width: 700,
    multiColumnSort: true,
    requires: [
        'Ext.field.CheckboxGroup'
    ],
    columns: [{
        text: 'Task',
        flex: 1,
        dataIndex: 'task',
        minWidth: 100,
    }, {
        text: 'Date',
        width: 120,
        dataIndex: 'date',
        formatter: 'date("d/m/Y")'
    }, {    
        text: 'Done',    
        xtype: 'checkcolumn',
        dataIndex: 'done'
    }]
});