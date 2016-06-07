
function render(containerId, templateId, data){
    var $container = $(containerId);
    var formTemplate = _.template($(templateId).text());
    $container.html(formTemplate(data))
}