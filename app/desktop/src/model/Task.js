Ext.define('todolist-ext-js.model.Task',{
    extend: 'Ext.data.Model',
    alias: 'model.task',
    idProperty: 'extraIdProperty',
    fields:[
        { name: 'id', type: 'int'},
        { name: 'content' },
        { name: 'dateCreation',},
        { name: 'dateEnd' },
        { name: 'done', type: 'boolean', defaultValue: false}
    ],

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: 'https://localhost:5001/api/Task',
    },
})