Ext.define('todolist-ext-js.model.Task',{
    extend: 'Ext.data.Model',
    alias: 'model.task',
    fields:[
        { name: 'content' },
        { name: 'date', type: 'date',},
        { name: 'done', type: 'boolean', defaultValue: false}
    ]
})