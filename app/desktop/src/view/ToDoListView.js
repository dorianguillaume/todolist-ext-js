Ext.define('todolist-ext-js.view.ToDoListView', {
    extend: 'Ext.grid.Grid',
    id: 'todolistgrid',
    xtype: 'todolistview',
    title: 'ToDo List',
    store: {type: 'todolist'},
    controller: 'todolistcontroller',
    height: 400,
    width: 700,
    scrollable: true,
    requires: [
        'Ext.field.CheckboxGroup'
    ],
    columns: [{
        text: 'Task',
        flex: 1,
        dataIndex: 'content',
        minWidth: 100,
    }, {
        text: 'Date de création',
        width: 150,
        dataIndex: 'dateCreation',
        formatter: 'date("d/m/Y H:i")'
    }, {
        text: 'Date de fin estimée',
        width: 150,
        dataIndex: 'dateEnd',
        formatter: 'date("d/m/Y H:i")'
    }, {
        text: 'Important',
        xtype: 'checkcolumn',
        dataIndex: 'important',
        disabled: true,
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
                    iconCls: 'x-fa fa-times green',
                    handler: 'deleteTask',
                },
            }
        }
    }]
   
});