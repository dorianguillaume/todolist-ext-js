Ext.define('todolist-ext-js.view.FormTaskView',{
    extend: 'Ext.Container',
    xtype: 'formtaskview',
    controller: 'formtask',
    store: {type: 'todolist'},
    width: 850,
    layout:{
        type: 'hbox',
        vertical: true,
        align: 'center'
    },

    requires:[
        'Ext.layout.Form',
        'Ext.Button',
        'Ext.field.*',
        'Ext.form.FieldSet',
    ],
    items:[{
        xtype:'formpanel',
        layout: 'form',
        width: 800,
        items:[
            {
                xtype: 'textareafield',
                name: 'description',
                id: 'description',
                required: true,
                label: 'Description',
                height: 100
            }, {
                xtype: 'datepickerfield',
                name: 'datefin',
                id: 'dateFinEstimated',
                required: true,
                label: 'Date de fin estimée',
                edgePicker: {
                    yearFrom: 2020
                }
            }, {
                xtype: 'timefield',
                label: 'Heure de fin estimée',
                name: 'heurefin',
                id: 'heureFinEstimated',
                required: true,
                format: 'H:i',
                altFormats:'H:i',
            }, {
                xtype: 'checkboxfield',
                name: 'important',
                id: 'important',
                label: 'Important',
            }
        ]},
        {
            xtype: 'button',
            text:'Ajouter une tâche',
            ui: 'action',
            margin: '10',
            handler: 'onAddClick'
        },
    ],
})