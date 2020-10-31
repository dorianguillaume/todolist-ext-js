Ext.define('todolist-ext-js.model.Task',{
    extend: 'Ext.data.Model',
    alias: 'model.task',
    fields:[
        { name: 'id', defaultValue: ''},
        { name: 'content' },
        { name: 'date',},
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