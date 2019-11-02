import * as actionTypes from '../constants/project';
import { updateObject } from '../utility';
import _ from 'lodash';
const initialState = {
    id: '',
    name: '',
    key: '',
    description: '',
    image: '',
    idmembers : [],
    idepic : [],
    idsprint: '',
    idissues : [],
    datecreate: '',
    hidden: false,
    error: false
};

const createProject = ( state, action ) => {
  let cloneState = [...state]
  cloneState.push(action.result)
  return cloneState
//  return updateObject( state, action.result );
};
const getAllList = (state, action) => {
    let cloneState = _.clone(state)
    cloneState = [...action.data]
    return cloneState
    // return updateObject(state, action.data)
}
const addSuccess = (state, action) => {
    let cloneState = _.clone(state)
    console.log(cloneState, action.data)
}
const projectError = (state, action) => {
    return updateObject(state, {error: true})
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.createProject: return createProject( state, action )
        case actionTypes.getAllList : return getAllList(state, action)
        case actionTypes.addSuccess : return addSuccess(state, action)
        case actionTypes.projectError : return projectError(state, action)
        default: return state;
    }
};

export default reducer;