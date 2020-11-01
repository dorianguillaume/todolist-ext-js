Ext.define('todolist-ext-js.view.ToDoListView', {
    extend: 'Ext.grid.Grid',
    id: 'todolistgrid',
    xtype: 'todolistview',
    title: 'ToDo List',
    store: {type: 'todolist'},
    controller: 'todolistcontroller',
    height: 800,
    width: 700,
    multiColumnSort: true,
    requires: [
        'Ext.field.CheckboxGroup'
    ],
    columns: [{
        text: 'Task',
        flex: 1,
        dataIndex: 'content',
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
    },
    {
        width: 70,
        hideable: false,

        cell: 
        {
            tools: 
            {
                approve: 
                {
                    iconCls: 'x-fa fa-check green',
                    handler: 'deleteTask',
                },
            }
        }
    }]
   
});