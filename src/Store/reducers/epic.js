import * as actionTypes from '../constants/epic';
import {updateObject, updateArray} from '../utility';
import _ from 'lodash'
const initialState = {
  _id:'',
  name : '',
  idissues : [],
  hidden: false,
  datecreate: '',
  dateedit: '',
}
const createEpic =(state, action) =>{
  return updateObject(state, action.data.newepic)
}
const viewListEpic = (state, action) => {
  let cloneState = []
 _.map(action.data.listepic, data => {
   cloneState = [...cloneState].concat(data)
 })
 return cloneState
}
const editEpic = (state, action) => {
  return _.map(_.cloneDeep(state), data => {
    if(data._id === action.data.epic._id) {
      return {...data, ...action.data.epic}
    }
    return data
  })
}
const reducer = (state = initialState, action ) =>{
  switch ( action.type ) {
    case actionTypes.createEpic: return createEpic( state, action );
    case actionTypes.viewList : return viewListEpic(state, action);
    case actionTypes.editEpic : return editEpic(state, action)
    default: return state;
}
}
export default reducer;