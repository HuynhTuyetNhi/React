import * as actionTypes from "../constants/sprint";
import CallApi from "../../until/apiCaller";


export const createSprint = data => {
  return {
    type: actionTypes.createSprint,
    data
  }
}
export const errorSprint = error => {
  return {
    type: actionTypes.errorSprint,
    message: error
  }
}
export const showListSprint = data => {
  return {
    type: actionTypes.showListSprint,
    data
  }
}
export const showListSprintAct = (id) => {
  return dispatch => {
    return CallApi(`sprint/viewListSprint/${id}`,
    'GET',
    {},
   'token'
    ).then (respone => {
      dispatch(showListSprint(respone.data.listsprint))
    }).catch(err => {
      dispatch(errorSprint(err))
    })
  }
}
export const createSprintAct = (data, id) => {
  return dispatch => {
    return CallApi(`sprint/createSprint`,
    'POST',
    {
      name: data,
      idproject : id
    },
   'token'
    ).then(respone => {
      dispatch(createSprint(respone.data))
    }).catch(err => {
      dispatch(errorSprint(err))
      // console.log(err)
    })
  }
}