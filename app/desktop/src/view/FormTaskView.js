Ext.define('todolist-ext-js.view.FormTaskView',{
    extend: 'Ext.Container',
    xtype: 'formtaskview',
    controller: 'formtask',
    store: {type: 'todolist'},
    width: 400,
    layout:{
        type: 'hbox',
        vertical: true,
        align: 'center'
    },

    requires:[
        'Ext.layout.Form',
        'Ext.Button',
    ],
    items:[{
        xtype:'formpanel',
        layout: 'form',
        width: 400,
        items:[{            
            xtype: 'textfield',
            labelAlign: 'left',
            label: 'Task' 
                   
        }]},
        {   
            xtype: 'button',
            text:'Ajouter',
            ui: 'action',
            margin: '10',
            handler: 'onAddClick'
        }  
    ]
})