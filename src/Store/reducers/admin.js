import * as actionTypes from '../constants/admin';
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
    // console.log(action.data[0])
    // console.log(state)
    // let cloneState = _.cloneDeep(state);
    // return {...cloneState, ...action.data[0]}
    // return updateObject(state, action.data[0])
    return findUserLikeEmail(state,action.data)
};

const getError = (state, action) => {
    return updateObject(state, {error: true });
}

const reducerAdmin = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SearchSuccess: return getSearchUser( state, action );
        case actionTypes.SearchError : return getError(state, action);
        default: return state;
    }
};

export default reducerAdmin ;