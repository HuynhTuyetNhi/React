import * as actionTypes from '../constants/member';
import { updateObject,findUserLikeEmail } from '../utility';
import _ from 'lodash';
const initialState = {
    _id: '',
    name: '',
    email: '',
    password: '',
    image:'',
    datecreate:'',
    // idgroup:'',
    error: false,
    hidden: false,
    message: ''
};

const getSearchUser = ( state, action ) => {
    return findUserLikeEmail(state,action.data)
};

const getError = (state, action) => {
    return updateObject(state, {error: true });
}

const reducerMember = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.Success: return getSearchUser( state, action );
        case actionTypes.ErrorSearch : return getError(state, action);
        default: return state;
    }
};

export default reducerMember ;