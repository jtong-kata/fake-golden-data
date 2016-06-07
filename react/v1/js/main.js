var FormEditor = React.createClass({


    removeItem: function(event){
        var index = $(event.currentTarget).data("item-index");
        this.props.removeFormItem(index);
    },
    
    addItem: function(item) {
        this.props.addItem(item)
    },

    
    render: function() {
        var self=this;
        return (<div>

                    <div>
                        <ul>
                             {this.props.items.map(function(item,index) {
                                 return (<li>
                                        {(function(){
                                            if(item.type ==="date"){
                                                return (<input type="date" />);
                                            }else{
                                                return (<input type="text" />);
                                            }
                                        })()}
                                     <button class="btn btn-default btn-sm" onClick={self.removeItem} data-item-index={index} >
                                         -
                                     </button>
                                 </li>)
                             })}
                        </ul>

                        <DialogButton addItem={this.addItem}/>
                    </div>
                </div>);
    }
});


var FormPreviewer = React.createClass({


    render: function() {
        return (<div>
            <div>
                <ul>
                     {this.props.items.map(function(item) {
                         return (<li>
                                {(function(){
                                    if(item.type ==="date"){
                                        return (<input type="date" />);
                                    }else{
                                        return (<input type="text" />);
                                    }
                                })()}

                         </li>)
                     })}
                </ul>

            </div>
        </div>);
    }
});

var DialogButton = React.createClass({

    openDialog: function(e){
        e.preventDefault();

        var $dialog = $('<div>').dialog({
            title: 'Choose Text',
            width: 400,
            close: function(e){
                ReactDOM.unmountComponentAtNode(this);
                $( this ).remove();
            }
        });

        var closeDialog = function(e){
            e.preventDefault();
            $dialog.dialog('close');
        }

        ReactDOM.render(<DialogContent closeDialog={closeDialog} submitHandler={this.props.addItem}/>, $dialog[0])
    },
    
    render: function(){
        var self = this;

        return (<button class="btn btn-default btn-sm" onClick= {this.openDialog}>
            +
        </button>);

    }

});

var DialogContent = React.createClass({
    getInitialState:function(){
        return {
            type:"date"

        }
    },
    
    onTypeChange: function(e){
        this.setState({
            type: e.currentTarget.value
        });
    },
    
    onSubmit: function(){
        //console.log(this.state);
        this.props.submitHandler(this.state)
    },
    
    render: function(){
        return <div >
            <input type="radio" name="dialogType" checked={this.state.type==="date"} onChange={this.onTypeChange} value="date" />date<br />
            <input type="radio" name="dialogType" checked={this.state.type==="text"} onChange={this.onTypeChange} value="text" />text<br />
            <button type="submit" onClick={this.onSubmit}>submit</button>
            <button onClick = {this.props.closeDialog}>Cancel</button>
        </div>
        
    }
});



var MyContainer = React.createClass({
    getInitialState:function(){
        return {
            status: "edit",
            items: []
        }

    },

    renderEditor: function(){
        this.state.status = "edit";
        
    },

    renderPreview: function(){
        this.state.status = "preview";

    },


    removeFormItem: function (index){
        var items = this.state.items;
        _.remove(items, function(item, i){
            return i == index

        });
    },
    
    addFormItem: function(item) {
        this.state.items.push(item);

        this.setState(this.state);
    },
    
    
    render: function(){
        var self = this;

        return (<div>
            {(function() {
                if (self.state.status === "edit") {
                    return <button class="btn btn-default btn-sm" onClick={self.renderPreview}>
                        preview
                    </button>
                }
                return <button class="btn btn-default btn-sm" onClick={self.renderEditor}>
                    edit
                </button>
            })()}


            {(function() {
                if (self.state.status === "edit") {
                    return  <FormEditor items={self.state.items}
                                        removeFormItem={self.removeFormItem}
                                        addItem={self.addFormItem}/>

                }
                return <FormPreviewer items={self.state.items}/>;
            })()}
        </div>);
        
    }
    
});




setInterval(function() {
    ReactDOM.render(
        <MyContainer >

        </MyContainer>
        ,
        document.getElementById('container')
    );
}, 50);