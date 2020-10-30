Ext.define('todolist-ext-js.store.ToDoList',{
    extend: 'Ext.data.Store',
    alias: 'store.todolist',
    model: 'todolist-ext-js.model.Task',
    data:{
        items:[
            {task: 'Découvrir EXT JS', date: new Date()},
            {task: 'Découvrir Laminas', date: new Date()},
            {task: 'Découvrir Laminas', date: new Date()}
        ]
    },
    proxy:{
        type: 'memory',
        reader:{
            type:'json',
            rootProperty: 'items',
        }
    }
})