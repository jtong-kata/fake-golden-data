var formDefinition = {
    items: []
};

$(document).ready(function () {
    reRenderEditor()
});


function reRenderEditor(){
    render('#container','#formEditor', formDefinition)
}

function reRenderPreview(){
    render('#container','#formPreview', formDefinition)
}

function render(containerId, templateId, data){
    var $container = $(containerId);
    var formTemplate = _.template($(templateId).text());
    $container.html(formTemplate(data))
}

function removeItem(index){
    removeFormItem(index, formDefinition);
    reRenderEditor();
}

function removeFormItem(index, formDefinition){
    var items = formDefinition.items;
    _.remove(items, function(item, i){
        return i == index

    });
}

function choose(){
    $("#popUp").html($("#chooseDialog").text())
    $("#popUp").dialog();
}

function addItem(btn){
    var selectType = $(btn).parent().find('[name="dialogType"]:checked').val();
    if(selectType){
        addFormItem(selectType,formDefinition);
        reRenderEditor();
    }
}

function addFormItem(type, formDefinition){
    formDefinition.items.push({
        type: type
    })
    
}