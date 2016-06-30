import React, { Component, PropTypes } from 'react'


class FormPreviewer extends Component{

    constructor(props){
        super(props);

    }

    render() {
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
}

export default FormPreviewer