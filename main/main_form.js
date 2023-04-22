var ABC = '123';
const form = $('#form').dxForm({
    //   formData: employees,
    width: 800,
    // colCount: 2,
    items: [{
        itemType: 'group',
        caption: '1.DIMENSIONAL STABILITY TO WASHING',
        colCount: 2,
        items: [
            'Test Report',
            'Number',
            {
                itemType: 'tabbed',
                tabPanelOptions: {
                    deferRendering: false,
                },
                colSpan: 2,
                tabs: [{
                    title: 'Warp Length',
                    colCount: 2,
                    items: ['Original(mm)', 'After wash(mm)', 'Dimensional change(%)', 'Requirment', {dataField: 'Remark', colSpan: 2}],
                }, {
                    title: 'Weft Length',
                    colCount: 2,
                    items: ['Original(mm)', 'After wash(mm)', 'Dimensional change(%)', 'Requirment', {dataField: 'Remark', colSpan: 2}],
                }],
            }, 
        ],
    }, {
        itemType: 'group',
        caption: '2.FABRIC WEIGHT',
        colCount: 2,
        items: [
            {
                dataField: 'Information',
                colSpan: 2,
            },
            'OZ / SQ. YD',
            'Requirement(oz/yd2)',
            'G. / SQ. M',
            'Requirement(G/M2)',
        ],
    }, {
        itemType: 'group',
        caption: '3.STRETCH, MODULUS AND RECOVERY OF STRETCH FABRICS',
        items: [
            'Information',
            {
                itemType: 'tabbed',
                tabPanelOptions: {
                    deferRendering: false,
                },
                tabs: [{
                    title: 'Length',
                    colCount: 2,
                    items: ['Total Elongation', 'Requirement Elongation', 'Recovery(%)', 'Requirement Recovery', 'Modulus At 40% Elong', 'Requirement Modulus'],
                }, {
                    title: 'Width',
                    colCount: 2,
                    items: ['Total Elongation', 'Requirement Elongation', 'Recovery(%)', 'Requirement Recovery', 'Modulus At 40% Elong', 'Requirement Modulus'],
                }],
            }, 
        ],
      }, {
        itemType: 'group',
        caption: '4.PEELING STRENGTH TEST',
        items: ['Information', {
            itemType: 'group',
            caption: 'Peeling Strength for bonded fabric',
            colCount: 2,
            items: ['Length', 'Requirement', 'Width', 'Requirement'],
        }],
      }, {
        itemType: 'group',
        caption: '5.pH IN VALUE',
        colCount: 3,
        items: ['Information', 'pH Value', 'Requirement'] 
      }, {
        itemType: 'group',
        caption: '6.COLORFASTNESS TO WASHING',
        items: ['Information', 'Color Change', 'Requirement', 'Solution Staining', 'Requirement',{
            itemType: 'group',
            caption: 'Color Stain On',
            colCount: 2,
            items: ['Wool', 'Requirement', 'Acrylic', 'Requirement','Polyester', 'Requirement', 'Nylon', 'Requirement','Cotton', 'Requirement', 'Acetate-Lyocell ', 'Requirement', {dataField: 'Remark', colSpan: 2}],
        }],
      }, {
        itemType: 'group',
        caption: '7.COLORFASTNESS TO PERSPIRATION',
        items: ['TEST REPORT', 'NUMBER',{
            itemType: 'tabbed',
            tabPanelOptions: {
                deferRendering: false,
            },
            tabs: [{
                title: 'To Acid - Color Stain On',
                colCount: 2,
                items: [{dataField: 'Information', colSpan: 2},'Color Change', 'Requirement','Wool', 'Requirement', 'Acrylic', 'Requirement','Polyester', 'Requirement', 'Nylon', 'Requirement','Cotton', 'Requirement', 'Acetate-Lyocell ', 'Requirement', {dataField: 'Remark', colSpan: 2}],
            }, {
                title: 'To Alkaline - Color Stain On',
                colCount: 2,
                items: [{dataField: 'Information', colSpan: 2},'Color Change', 'Requirement','Wool', 'Requirement', 'Acrylic', 'Requirement','Polyester', 'Requirement', 'Nylon', 'Requirement','Cotton', 'Requirement', 'Acetate-Lyocell ', 'Requirement', {dataField: 'Remark', colSpan: 2}],
            }]
        }],
      }, {
        itemType: 'group',
        caption: '8.COLORFASTNESS TO WATER',
        items: ['Information', 'Color Change', 'Requirement', 'Solution Staining', 'Requirement',{
            itemType: 'group',
            caption: 'Color Stain On',
            colCount: 2,
            items: ['Wool', 'Requirement', 'Acrylic', 'Requirement','Polyester', 'Requirement', 'Nylon', 'Requirement','Cotton', 'Requirement', 'Acetate-Lyocell ', 'Requirement', {dataField: 'Remark', colSpan: 2}],
        }],
      }, {
        itemType: 'group',
        caption: '9.COLORFASTNESS TO CROCKING',
        colCount: 2,
        items: [
            {
                dataField: 'Information',
                colSpan: 2,
            },
            'Dry',
            'Requirement',
            'Wet',
            'Requirement',
            {
                dataField: 'Remark',
                colSpan: 2,
            }
        ],
      }, {
        itemType: 'group',
        caption: '10.COLOR MIGRATION OVEN TEST',
        items: [{dataField: 'Information', colSpan: 2}, 'Color Change', 'Requirement', 'Solution Staining', 'Requirement',{
            itemType: 'group',
            caption: 'Color Stain On',
            colCount: 2,
            items: ['Wool', 'Requirement', 'Acrylic', 'Requirement','Polyester', 'Requirement', 'Nylon', 'Requirement','Cotton', 'Requirement', 'Acetate', 'Requirement', 'White Adjacent Fabric', 'Requirement' ,{dataField: 'Remark', colSpan: 2}],
        }],
      },
    ],
}).dxForm('instance');
 
var FORM_DATA = '';
$(function () {
    $("#buttonContainer").dxButton({
        stylingMode: 'contained',
        text: "SAVE",
        type: 'default',
        width: 500,
        onClick: function () {
            console.log($('#form').dxForm('instance').option('formData'))
        }
    }).dxButton('instance');
});
