
function removeItem(index){
    removeFormItem(index, formDefinition);
    reRenderEditor();
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



function reRenderEditor(){
    render('#container','#formEditor', formDefinition)
}

function reRenderPreview(){
    render('#container','#formPreview', formDefinition)
}
