import React, { Component, PropTypes } from 'react'
import FormPreviewer from "../components/FormPreviewer.js"
import { connect } from 'react-redux'

class FormPreviewerPage extends Component{
    constructor(props){
        super(props);

    }

    render(){
        var self = this;

        return (<div>
            <FormPreviewer items={this.props.items} />
        </div>);
    }

}

FormPreviewerPage.propTypes = {
    items: PropTypes.array.isRequired,
}


function mapStateToProps(state, ownProps) {
    return {
        items: state.itemsState.items,
    }
}
export default connect(mapStateToProps, {
})(FormPreviewerPage)