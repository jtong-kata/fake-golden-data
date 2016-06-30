import React, { Component, PropTypes } from 'react'
import * as containerAPI from "../handler/container-api"
import FormEditor from "../components/FormEditor.js"
import { connect } from 'react-redux'

class FormEditorPage extends Component{
    constructor(props){
        super(props);

    }


    render(){
        var self = this;

        return (<div>
            <FormEditor items={this.props.items} />
        </div>);
    }

}

FormEditorPage.propTypes = {
    items: PropTypes.array.isRequired,
}


function mapStateToProps(state, ownProps) {
    return {
        items: state.itemsState.items,
    }
}
export default connect(mapStateToProps, {
})(FormEditorPage)