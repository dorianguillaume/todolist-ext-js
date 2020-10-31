Ext.define('todolist-ext-js.store.ToDoList',{
    extend: 'Ext.data.Store',
    alias: 'store.todolist',
    model: 'todolist-ext-js.model.Task',
    proxy:{
        type: 'ajax',
        url:'https://localhost:5001/api/Task',
        reader:{
            type:'json',
            rootProperty: 'data',
        }
    },
    autoLoad: true,
    autoSync: true,
})