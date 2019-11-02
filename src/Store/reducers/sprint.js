import * as actionTypes from '../constants/sprint';
import { updateObject } from '../utility';
import _ from 'lodash';
const initialState = {
   _id: '',
   idissues: [],
   hidden: false,
   name: '',
   datecreate: '',
   error: false,
};
export const createSprint =(state, action) => {
  return updateObject(state, action.data.newsprint)
}
export const errorSprint =(state, action) => {
  return updateObject(state, {error: true})
}
export const showListSprint = (state, action) => {
  let customData = _.compact(action.data)
  let cloneState = _.clone(state)
  cloneState = [...customData]
  return cloneState
}
// export const showListIssue = (state, action) => {
//   console.log(action.data)
//   let cloneState = _.clone(state)
//   cloneState = [...action.data.listissues]
//   return cloneState
// }
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.createSprint: return createSprint( state, action );
        case actionTypes.errorSprint : return errorSprint(state, action);
        case actionTypes.showListSprint: return showListSprint(state, action);
        default: return state;
    }
};

export default reducer ;