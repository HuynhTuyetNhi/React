import * as actionTypes from '../constants/group';
import CallApi from '../../until/apiCaller';

export const getGroup = (data) =>{
  return {
      type:actionTypes.getGroup,
      id: data.userId
  }
}
export const createGroup = (data) =>{
  return {
    type: actionTypes.createGroup,
    userId: data.userId
  }
}
export const createError = (name) =>{
  return {
    type: actionTypes.createError,
    message : name
  }
}
export const getListGroup = (data) =>{
  return {
    type: actionTypes.getListGroup,
    data: data
  }
}
export const getListAction = (name) =>{
    return dispatch =>{
      return CallApi(`group/getGroup/${name}`,
      'GET',
      {
        name : name
      },
      document.cookie.split("=")[2]
      )
      .then (respone =>{
        dispatch(getListGroup(respone.data.result))
      })
      .catch(err =>{
        dispatch(createError(err))
      })
    }
};
export const createGroupAct = (name) =>{
  return dispatch =>{
    return CallApi("group/createGroup",
    "POST",
    {
      name: name
    },
    document.cookie.split("=")[2]
    )
    .then (respone =>{
      dispatch(createGroup(respone.data))
    })
    .catch(err =>{
      dispatch(createError(err))
    })
  }
} 