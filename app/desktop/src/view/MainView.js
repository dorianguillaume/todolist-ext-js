Ext.define('todolist-ext-js.view.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    cls: 'mainview',

    layout: {
        type:'hbox',
        vertical: true,
        align:'center'
    },
    
    items: [
        {xtype: 'formtaskview'},
        {xtype: 'todolistview'},    
    ],
});
