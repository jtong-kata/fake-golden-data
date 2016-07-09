import React, { Component, PropTypes } from 'react'
import * as containerAPI from "../handler/container-api"
import { connect } from 'react-redux'

class MyContainer extends Component{
    constructor(props){
        super(props);

    }

    renderEditor(){
        containerAPI.showEditor()
        this.context.router.push("/editor")

    }

    renderPreview(){
        containerAPI.showPreview()

        this.context.router.push("/preview")

    }

    render(){
        var self = this;

        return (<div>
            {(() => {
                if (self.props.status === "edit") {
                    return <button class="btn btn-default btn-sm" onClick={e=>self.renderPreview(e)}>
                        preview
                    </button>
                }
                return <button class="btn btn-default btn-sm" onClick={e=>self.renderEditor(e)}>
                    edit
                </button>
            })()}


            {this.props.children}
        </div>);
    }

}

MyContainer.propTypes = {
    status: PropTypes.string.isRequired
}
MyContainer.contextTypes={
        router: React.PropTypes.object
}


function mapStateToProps(state, ownProps) {
    return {
        status: state.formState.status
    }
}
export default connect(mapStateToProps, {
})(MyContainer)