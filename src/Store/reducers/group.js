import * as actionTypes from '../constants/group';
import { updateObject,findUserLikeEmail } from '../utility';
import _ from 'lodash';
const initialState = {
    id: '',
    name: '',
    manager: '',
    members: [],
    error: false,
    message: ''
};

const getGroup = ( state, action ) => {
  return updateObject( state, {id : action.id} );
};
const insertGroup = (state, action) =>{
    let json = {
        userId: action.userId
    }
    state = json ;
    return updateObject(state, {id: action.userId})
}
const insertError = (state,action) =>{
    return updateObject(state, {error: true})
}
const getListGroup = (state, action) =>{
  return updateObject(state,action.data)
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.getGroup: return getGroup( state, action ); 
        case actionTypes.createGroup: return insertGroup(state, action);
        case actionTypes.createError: return insertError(state,action);
        case actionTypes.getListGroup: return getListGroup(state,action);
        default: return state;
    }
};

export default reducer;