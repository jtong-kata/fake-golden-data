import React, { Component, PropTypes } from 'react'
import FormPreviewer from "../components/FormPreviewer.js"
import { connect } from 'react-redux'

class FormEditorPage extends Component{
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

FormPreviewer.propTypes = {
    items: PropTypes.array.isRequired,
}


function mapStateToProps(state, ownProps) {
    return {
        items: state.itemsState.items,
    }
}
export default connect(mapStateToProps, {
})(FormPreviewer)