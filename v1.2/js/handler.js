function reRender(status){
    formDefinition.status = status;
    render('#container','#formDefinition', formDefinition)
}

function removeItem(index){
    formDefinition.removeFormItem(index);
    reRender("edit");
}

function choose(){
    $("#popUp").html($("#chooseDialog").text())
    $("#popUp").dialog();
}

function addItem(btn){
    var selectType = $(btn).parent().find('[name="dialogType"]:checked').val();
    if(selectType){
        formDefinition.addFormItem(selectType);
        reRender('edit');
    }
}