
function removeFormItem(index, formDefinition){
    var items = formDefinition.items;
    _.remove(items, function(item, i){
        return i == index

    });
}



function addFormItem(type, formDefinition){
    formDefinition.items.push({
        type: type
    })

}