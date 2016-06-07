var formDefinition = {
    status: "edit",
    items: [],

    removeFormItem: function(index){
                        var items = this.items;
                        _.remove(items, function(item, i){
                            return i == index

                        });
                    },


    addFormItem: function(type){
                     this.items.push({
                         type: type
                     })
                 }
};