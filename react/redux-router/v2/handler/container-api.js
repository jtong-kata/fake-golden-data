import store from '../store.js';
import { showEditorAction, showPreviewAction } from '../actions/container-action';

/**
 * Get all users
 */

export function showEditor() {
    store.dispatch(showEditorAction());
}

export function showPreview(){
    store.dispatch(showPreviewAction());
}



