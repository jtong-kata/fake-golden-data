import React, { Component, PropTypes } from 'react'
import * as containerAPI from "../handler/container-api"
import FormEditor from "../components/FormEditor.js"
import FormPreviewer from "../components/FormPreviewer.js"
import { connect } from 'react-redux'

class MyContainer extends Component{
    constructor(props){
        super(props);

    }
    
    renderEditor(){
        containerAPI.showEditor()

    }

    renderPreview(){
        containerAPI.showPreview()

    }

    render(){
        var self = this;

        return (<div>
            {(() => {
                if (self.props.status === "edit") {
                    return <button class="btn btn-default btn-sm" onClick={self.renderPreview}>
                        preview
                    </button>
                }
                return <button class="btn btn-default btn-sm" onClick={self.renderEditor}>
                    edit
                </button>
            })()}


            {(() => {
                if (self.props.status === "edit") {
                    return  <FormEditor items={self.props.items} />

                }
                return <FormPreviewer items={self.props.items}/>;
            })()}
        </div>);
    }

}

MyContainer.propTypes = {
    items: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired
}


function mapStateToProps(state, ownProps) {
    return {
        items: state.itemsState.items,
        status: state.formState.status
    }
}
export default connect(mapStateToProps, {
})(MyContainer)