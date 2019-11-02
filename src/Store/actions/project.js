import * as actionTypes from '../constants/project';
import CallApi from '../../until/apiCaller';


export const projectError = (status) => {
  return {
    type: actionTypes.projectError,
    message: status
  }
}
export const createProject = (data) => {
  return {
    type: actionTypes.createProject,
    result : data
  }
}
export const getAllList = (data) => {
  return {
    type: actionTypes.getAllList,
    data: data
  }
}
export const addMemberSuccess = (data) => {
  return {
    type: actionTypes.addSuccess,
    data
  }
}
export const AddMemberAct =(idproject,user) => {
  console.log(idproject, user)
  return dispatch => {
    return CallApi(`project/AddMember/${idproject}`,
    'PUT',
    {
      iduser: user._id,
      position: user.position
    },
    'token'
    ).then(respone => {
      console.log(respone)
      dispatch(addMemberSuccess(respone.data))
    }).catch(err => {
      console.log(err)
      dispatch(projectError(err))
    })
  }
}

export const getListProjectAct = () =>{
  console.log(document.cookie)
  return dispatch => {
    return CallApi('project/ViewListProject',
    'GET',
    {},
    'token'
    ).then(respone => {
      console.log(respone.data.listproject)
      dispatch(getAllList(respone.data.listproject))
    }).catch(err =>{
      dispatch(projectError(err))
    })

  }
}
export const createProjectAct = (name) => {
  return dispatch => {
    return CallApi('project/createProject',
    'POST',
    {
      name : name
    },
    'token'
    )
    .then (respone => {
      dispatch(createProject(respone.data.newproject))
    })
    .catch(err =>{
       dispatch(projectError(err))
    })
  }
}