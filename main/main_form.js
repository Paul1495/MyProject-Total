const form = $('#form').dxForm({
    width: 1500,
    items: [
    {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
              text: '1. Check dimensional stability to washing',
              value: false,
              onValueChanged(e) {
                form.itemOption('Dimensional', 'visible', e.value);
              },
            },
        },
        {
          itemType: 'group',
          items: [{
            itemType: 'group',
            visible: false,
            name: 'Dimensional',
            caption: '1. DIMENSIONAL STABILITY TO WASHING',
            colCount: 2,
            items: [
                {
                    dataField:'Dimensional.Information',
                    label: {text:'Information'},
                    colSpan: 2,
                },{
                itemType: 'tabbed',
                tabPanelOptions: {
                    deferRendering: false,
                },
                colSpan: 2,
                tabs: [{
                    title: 'Warp Length',
                    colCount: 2,
                    items: [
                    {
                        dataField: 'Dimensional.WarpLength.Original',
                        label: {text:'Original(mm)'}
                    },{
                        dataField: 'Dimensional.WarpLength.AfterWash',
                        label: {text:'After wash(mm)'}
                    },{
                        dataField: 'Dimensional.WarpLength.Change',
                        label: {text:'Dimensional change(%)'}
                    },{
                        dataField: 'Dimensional.WarpLength.Requirement',
                        label: {text:'Requirement'}
                    },{
                        dataField: 'Dimensional.WarpLength.Remark',
                        label: {text:'Remark'},
                        colSpan: 2
                    }],
                }, {
                    title: 'Weft Length',
                    colCount: 2,
                    items: [
                        {
                            dataField: 'Dimensional.WeftLength.Original',
                            label: {text:'Original(mm)'}
                        },{
                            dataField: 'Dimensional.WeftLength.AfterWash',
                            label: {text:'After wash(mm)'}
                        },{
                            dataField: 'Dimensional.WeftLength.Change',
                            label: {text:'Dimensional change(%)'}
                        },{
                            dataField: 'Dimensional.WeftLength.Requirement',
                            label: {text:'Requirement'}
                        },{
                            dataField: 'Dimensional.WeftLength.Remark',
                            label: {text:'Remark'},
                            colSpan: 2
                    }],
                }],
            }],
          }],
        },
        ],
    },{
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '2. Check fabric weight',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Fabric', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Fabric',
                caption: '2. FABRIC WEIGHT',
                colCount: 2,
                items: [
                {
                    dataField: 'Fabric.Information',
                    label: {text:'Information'}   ,     
                    colSpan: 2,
                },{
                    dataField: 'Fabric.OZ',
                    label: {text:'OZ/SQ YD'}   ,       
                },{
                    dataField: 'Fabric.RequirementOZ',
                    label: {text:'Requirement(oz/yd2)'}   ,     
                },{
                    dataField: 'Fabric.G',
                    label: {text:'G/SQ M'}   ,      
                },{
                    dataField: 'Fabric.RequirementG',
                    label: {text:'Requirement(G/M2)'}   ,         
                }
                ],
            }],
        },
        ], 
    },{
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '3. Check stretch, modulus and recovery',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Stretch', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Stretch',
                caption: '3. STRETCH, MODULUS AND RECOVERY OF STRETCH FABRICS',
                items: [
                {
                    dataField: 'Stretch.Information',
                    label: {text:'Information'},
                },{
                    itemType: 'tabbed',
                    tabPanelOptions: {
                        deferRendering: false,
                    },
                    tabs: [
                    {
                        title: 'Length',
                        colCount: 2,
                        items: [
                        {
                            dataField: 'Stretch.Length.Elongation',
                            label: {text: 'Total Elongation'}
                        },{
                            dataField: 'Stretch.Length.RequirementElongation',
                            label: {text: 'Requirement Elongation'}
                        },{
                            dataField: 'Stretch.Length.Recovery',
                            label: {text: 'Recovery(%)'}
                        },{
                            dataField: 'Stretch.Length.RequirementRecovery',
                            label: {text: 'Requirement Recovery'} 
                        },{
                            dataField: 'Stretch.Length.Modulus',
                            label: {text: 'Modulus At 40% Elong'}
                        },{
                            dataField: 'Stretch.Length.RequirementModulus',
                            label: {text: 'Requirement Modulus'}
                        }],
                    }, {
                        title: 'Width',
                        colCount: 2,
                        items: [
                        {
                            dataField: 'Stretch.Width.Elongation',
                            label: {text: 'Total Elongation'}
                        },{
                            dataField: 'Stretch.Width.RequirementElongation',
                            label: {text: 'Requirement Elongation'}
                        },{
                            dataField: 'Stretch.Width.Recovery',
                            label: {text: 'Recovery(%)'}
                        },{
                            dataField: 'Stretch.Width.RequirementRecovery',
                            label: {text: 'Requirement Recovery'} 
                        },{
                            dataField: 'Stretch.Width.Modulus',
                            label: {text: 'Modulus At 40% Elong'}
                        },{
                            dataField: 'Stretch.Width.RequirementModulus',
                            label: {text: 'Requirement Modulus'}
                        }],
                    }],
                    }, 
                ],
            }],
        },
        ],   
    }, {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '4. Check peeling test',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Peeling', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Peeling',
                caption: '4. PEELING STRENGTH TEST',
                items: [
                {
                    dataField: 'Peeling.Information',
                    label: {text: 'Information'}
                },{
                    itemType: 'group',
                    caption: 'Peeling Strength for bonded fabric',
                    colCount: 2,
                    items: [
                    {
                        dataField: 'Peeling.Strength.Length',
                        label: {text: 'Length'}
                    },{
                        dataField: 'Peeling.Strength.RequirementLength',
                        label: {text: 'Requirement(L)'}
                    },{
                        dataField: 'Peeling.Strength.Width',
                        label: {text: 'Width'} 
                    },{
                        dataField: 'Peeling.Strength.RequirementWidth',
                        label: {text: 'Requirement(W)'} 
                    }],
                }
                ],
            }],
        },
        ],    
    }, {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '5. Check PH',
                value: false,
                onValueChanged(e) {
                  form.itemOption('PH', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'PH',
                caption: '5. pH IN VALUE',
                colCount: 3,
                items: [
                {
                    dataField: 'PH.Information',
                    label: {text:'Information'}
                },{
                    dataField: 'PH.Value',
                    label: {text:'pH Value'}
                },{
                    dataField: 'PH.Requirement',
                    label: {text:'Requirement'}
                }
                ],
            }],
        },
        ],     
    }, {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '6. Check colorfastness to washing',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Washing', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Washing',
                caption: '6. COLORFASTNESS TO WASHING',
                items: [
                {
                    dataField: 'ColorWashing.Information',
                    label: {text:'Information'}
                },{
                    dataField: 'ColorWashing.ColorChange',
                    label: {text:'Color Change'}
                },{
                    dataField: 'ColorWashing.RequirementColor',
                    label: {text:'Require Color'}
                },{
                    dataField: 'ColorWashing.SolutionStain',
                    label: {text:'Solution Staining'}
                },{
                    dataField: 'ColorWashing.RequirementSolution',
                    label: {text:'Require Solution'}
                },{
                    itemType: 'group',
                    caption: 'Color Stain On',
                    colCount: 2,
                    items: [
                    {
                        dataField: 'ColorWashing.ColorStain.Wool',
                        label: {text:'Wool'}
                    },{
                        dataField: 'ColorWashing.ColorStain.RequirementWool',
                        label: {text:'Require Wool'}
                    },{
                        dataField: 'ColorWashing.ColorStain.Acrylic',
                        label: {text:'Acrylic'}
                    },{
                        dataField: 'ColorWashing.ColorStain.RequirementAcrylic',
                        label: {text:'Require Acrylic'}
                    },{
                        dataField: 'ColorWashing.ColorStain.Polyester',
                        label: {text:'Polyester'}
                    },{
                        dataField: 'ColorWashing.ColorStain.RequirementPolyester',
                        label: {text:'Require Polyester'}
                    },{
                        dataField: 'ColorWashing.ColorStain.Nylon',
                        label: {text:'Nylon'}
                    },{
                        dataField: 'ColorWashing.ColorStain.RequirementNylon',
                        label: {text:'Require Nylon'}
                    },{
                        dataField: 'ColorWashing.ColorStain.Cotton',
                        label: {text:'Cotton'}
                    },{
                        dataField: 'ColorWashing.ColorStain.RequirementCotton',
                        label: {text:'Require Cotton'}
                    },{
                        dataField: 'ColorWashing.ColorStain.Acetate',
                        label: {text:'Acetate-Lyocell'}
                    },{
                        dataField: 'ColorWashing.ColorStain.RequirementAcetate',
                        label: {text:'Require Acetate'}
                    },{
                        dataField: 'ColorWashing.ColorStain.Remark', 
                        label: {text:'Remark'},
                        colSpan: 2
                    }
                    ],
                }],
            }],
        },
        ],     
    }, {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '7. Check colorfastness to Perspiration',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Perspiration', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Perspiration',
                caption: '7. COLORFASTNESS TO PERSPIRATION',
                items: [
                {
                    itemType: 'tabbed',
                    tabPanelOptions: {
                        deferRendering: false,
                    },
                    tabs: [{
                        title: 'To Acid - Color Stain On',
                        colCount: 2,
                        items: [
                        {   
                            dataField: 'ColorPerspiration.ToAcid.Information',
                            label: {text:'Information'},
                            colSpan: 2
                        },{
                            dataField: 'ColorPerspiration.ToAcid.ColorChange',
                            label: {text:'Color Change'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.RequirementColor',
                            label: {text:'Require Color'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.Wool',
                            label: {text:'Wool'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.RequirementWool',
                            label: {text:'Require Wool'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.Acrylic',
                            label: {text:'Acrylic'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.RequirementAcrylic',
                            label: {text:'Require Acrylic'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.Polyester',
                            label: {text:'Polyester'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.RequirementPolyester',
                            label: {text:'Require Polyester'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.Nylon',
                            label: {text:'Nylon'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.RequirementNylon',
                            label: {text:'Require Nylon'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.Cotton',
                            label: {text:'Cotton'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.RequirementCotton',
                            label: {text:'Require Cotton'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.Acetate',
                            label: {text:'Acetate-Lyocell'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.RequirementAcetate',
                            label: {text:'Require Acetate'},
                        },{
                            dataField: 'ColorPerspiration.ToAcid.Remark',
                            label: {text:'Remark'},
                            colSpan: 2
                        }
                        ],
                    }, {
                        title: 'To Alkaline - Color Stain On',
                        colCount: 2,
                        items: [
                        {   
                            dataField: 'ColorPerspiration.ToAlkaline.Information',
                            label: {text:'Information'},
                            colSpan: 2
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.ColorChange',
                            label: {text:'Color Change'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.RequirementColor',
                            label: {text:'Require Color'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.Wool',
                            label: {text:'Wool'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.RequirementWool',
                            label: {text:'Require Wool'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.Acrylic',
                            label: {text:'Acrylic'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.RequirementAcrylic',
                            label: {text:'Require Acrylic'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.Polyester',
                            label: {text:'Polyester'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.RequirementPolyester',
                            label: {text:'Require Polyester'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.Nylon',
                            label: {text:'Nylon'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.RequirementNylon',
                            label: {text:'Require Nylon'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.Cotton',
                            label: {text:'Cotton'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.RequirementCotton',
                            label: {text:'Require Cotton'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.Acetate',
                            label: {text:'Acetate-Lyocell'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.RequirementAcetate',
                            label: {text:'Require Acetate'},
                        },{
                            dataField: 'ColorPerspiration.ToAlkaline.Remark',
                            label: {text:'Remark'},
                            colSpan: 2
                        }
                        ],
                    }]
                }],
            }],
        },
        ],      
    }, {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '8. Check colorfastness to water',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Water', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Water',
                caption: '8. COLORFASTNESS TO WATER',
                items: [
                {
                    dataField: 'ColorWater.Information',
                    label: {text:'Information'}
                },{
                    dataField: 'ColorWater.ColorChange',
                    label: {text:'Color Change'}
                },{
                    dataField: 'ColorWater.RequirementColor',
                    label: {text:'Require Color'}
                },{
                    itemType: 'group',
                    caption: 'Color Stain On',
                    colCount: 2,
                    items: [
                    {
                        dataField: 'ColorWater.ColorStain.Wool',
                        label: {text:'Wool'}
                    },{
                        dataField: 'ColorWater.ColorStain.RequirementWool',
                        label: {text:'Require Wool'}
                    },{
                        dataField: 'ColorWater.ColorStain.Acrylic',
                        label: {text:'Acrylic'}
                    },{
                        dataField: 'ColorWater.ColorStain.RequirementAcrylic',
                        label: {text:'Require Acrylic'}
                    },{
                        dataField: 'ColorWater.ColorStain.Polyester',
                        label: {text:'Polyester'}
                    },{
                        dataField: 'ColorWater.ColorStain.RequirementPolyester',
                        label: {text:'Require Polyester'}
                    },{
                        dataField: 'ColorWater.ColorStain.Nylon',
                        label: {text:'Nylon'}
                    },{
                        dataField: 'ColorWater.ColorStain.RequirementNylon',
                        label: {text:'Require Nylon'}
                    },{
                        dataField: 'ColorWater.ColorStain.Cotton',
                        label: {text:'Cotton'}
                    },{
                        dataField: 'ColorWater.ColorStain.RequirementCotton',
                        label: {text:'Require Cotton'}
                    },{
                        dataField: 'ColorWater.ColorStain.Acetate',
                        label: {text:'Acetate-Lyocell'}
                    },{
                        dataField: 'ColorWater.ColorStain.RequirementAcetate',
                        label: {text:'Require Acetate'}
                    },{
                        dataField: 'ColorWater.ColorStain.Remark', 
                        label: {text:'Remark'},
                        colSpan: 2
                    }
                    ]
                }],
            }]
        }],      
    }, {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '9. Check colorfastness to crocking',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Crocking', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Crocking',
                caption: '9. COLORFASTNESS TO CROCKING',
                colCount: 2,
                items: [
                    {
                        dataField: 'ColorCrocking.Information', 
                        label: {text:'Information'},
                        colSpan: 2
                    },{
                        dataField: 'ColorCrocking.Dry', 
                        label: {text:'Dry'},
                    },{
                        dataField: 'ColorCrocking.RequirementDry', 
                        label: {text:'Require Dry'},
                    },{
                        dataField: 'ColorCrocking.Wet', 
                        label: {text:'Wet'},
                    },{
                        dataField: 'ColorCrocking.RequirementWet', 
                        label: {text:'Require We'},
                    },{
                        dataField: 'ColorCrocking.Remark', 
                        label: {text:'Remark'},
                        colSpan: 2
                    }
                    ],
            }],
        },
        ],       
    }, {
        itemType: 'group',
        colCount: 2,
        items: [
        {
            itemType: 'simple',
            editorType: 'dxCheckBox',
            editorOptions: {
                text: '10. Check color migration oven test',
                value: false,
                onValueChanged(e) {
                  form.itemOption('Oven', 'visible', e.value);
                },
            },
        },
        {
            itemType: 'group',
            items: [{
                itemType: 'group',
                visible: false,
                name: 'Oven',
                caption: '10. COLOR MIGRATION OVEN TEST',
                items: [
                    {
                        dataField: 'OvenTest.Information',
                        label: {text:'Information'}
                    },{
                        dataField: 'OvenTest.ColorChange',
                        label: {text:'Color Change'}
                    },{
                        dataField: 'OvenTest.RequirementColor',
                        label: {text:'Require Color'}
                    },{
                        itemType: 'group',
                        caption: 'Color Stain On',
                        colCount: 2,
                        items: [
                        {
                            dataField: 'OvenTest.ColorStain.Wool',
                            label: {text:'Wool'}
                        },{
                            dataField: 'OvenTest.ColorStain.RequirementWool',
                            label: {text:'Require Wool'}
                        },{
                            dataField: 'OvenTest.ColorStain.Acrylic',
                            label: {text:'Acrylic'}
                        },{
                            dataField: 'OvenTest.ColorStain.RequirementAcrylic',
                            label: {text:'Require Acrylic'}
                        },{
                            dataField: 'OvenTest.ColorStain.Polyester',
                            label: {text:'Polyester'}
                        },{
                            dataField: 'OvenTest.ColorStain.RequirementPolyester',
                            label: {text:'Require Polyester'}
                        },{
                            dataField: 'OvenTest.ColorStain.Nylon',
                            label: {text:'Nylon'}
                        },{
                            dataField: 'OvenTest.ColorStain.RequirementNylon',
                            label: {text:'Require Nylon'}
                        },{
                            dataField: 'OvenTest.ColorStain.Cotton',
                            label: {text:'Cotton'}
                        },{
                            dataField: 'OvenTest.ColorStain.RequirementCotton',
                            label: {text:'Require Cotton'}
                        },{
                            dataField: 'OvenTest.ColorStain.Acetate',
                            label: {text:'Acetate-Lyocell'}
                        },{
                            dataField: 'OvenTest.ColorStain.RequirementAcetate',
                            label: {text:'Require Acetate'}
                        },{
                            dataField: 'OvenTest.ColorStain.WhiteAdjacentFabric',
                            label: {text:'WhiteAdjacentFabric'}
                        },{
                            dataField: 'OvenTest.ColorStain.RequirementAdjacent',
                            label: {text:'Require Adjacent'}
                        },{
                            dataField: 'OvenTest.ColorStain.Remark', 
                            label: {text:'Remark'},
                            colSpan: 2
                        }
                        ]
                    }
                ],
            }],
        },
        ],       
    }, {
        itemType: 'button',
        horizontalAlignment: 'left',
        buttonOptions: {
          text: 'Save',
          type: 'success',
          useSubmitBehavior: true,
          onClick: function() {
            console.log(form.option('formData'))
          }
        },
    }],
}).dxForm('instance');