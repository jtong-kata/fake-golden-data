var formDefinition = {
    status: "edit",
    items: []
};

$(document).ready(function () {
    reRender("edit");
});

function reRender(status){
    formDefinition.status = status;
    render('#container','#formDefinition', formDefinition)
}

function render(containerId, templateId, data){
    var $container = $(containerId);
    var formTemplate = _.template($(templateId).text());
    $container.html(formTemplate(data))
}

function removeItem(index){
    removeFormItem(index, formDefinition);
    reRender("edit");
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
        reRender('edit');
    }
}

function addFormItem(type, formDefinition){
    formDefinition.items.push({
        type: type
    })
    
}