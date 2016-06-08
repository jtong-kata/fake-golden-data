import React, { Component, PropTypes } from 'react'
import * as editorAPI from "../handler/form-editor-api"
import DialogButton from "../components/DialogButton.js"
import $ from "jquery"

class FormEditor extends Component{

   constructor(props){
     super(props);
     
   }

  removeItem(event){
    let index = $(event.currentTarget).data("item-index");
    editorAPI.removeItem(index);
  }

  addItem(item) {
    editorAPI.addItem(item);
  }


  render() {
    var self=this;
    return (<div>

      <div>
        <ul>
           {this.props.items.map((item,index) => {
             return (<li>
                      {(()=> {
                        if (item.type === "date") {
                          return (<input type="date" />);
                        } else {
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
}




export default FormEditor
