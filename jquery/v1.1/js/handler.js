function reRender(status){
    formDefinition.status = status;
    render('#container','#formDefinition', formDefinition)
}

function removeItem(index){
    removeFormItem(index, formDefinition);
    reRender("edit");
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