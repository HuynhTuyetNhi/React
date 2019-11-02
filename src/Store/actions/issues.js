import * as actionTypes from '../constants/issues';
import CallApi from '../../until/apiCaller';

export const createIssue = data => {
  return {
    type: actionTypes.createIssue,
    data
  }
}
export const IssueError = error => {
  return {
    type: actionTypes.IssueError,
    message: error
  }

}
export const showListIssue = data => {
  return {
    type: actionTypes.showListIssue,
    data
  }
}
export const EditIssue = data => {
  return {
    type: actionTypes.EditIssue,
    data
  }
}
export const AddIssueIntoSprint = (idIssue, idSprint) => {
  return dispatch => {
    return CallApi(`issues/addIssueIntoSprint/${idIssue}`,
    'PUT',
    {
      idsprint: idSprint
    },
    'token'
    ).then(respone => {
      console.log(respone)
    }).catch(err => {
      console.log(err)
    })
  }
}
export const assignTaskIssueAct = (idissues, idUser) => {
  return dispatch => {
    return CallApi(`issues/assignforUser/${idissues}`,
    'PUT',
    {
      iduser: idUser
    },
   'token'
    ).then(respone => {
      console.log(respone)
    }).catch(err => {
      console.log(err)
    })
  }
}
export const EditIssuesAct = (id, issue) => {
  return dispatch => {
    return CallApi(`issues/editIssues/${id}`,
    'PUT',
    issue,
   'token'
    ).then(respone=>{
      dispatch(EditIssue(respone.data.newissues))
    }).catch(err => {
      dispatch(IssueError(err))
    })
  }
}
export const showListIssueAct = (id) => {
  return dispatch => {
    return CallApi(`issues/viewListIssues/${id}`,
    'GET',
    {},
    'token'
    ).then (respone => {
      dispatch(showListIssue(respone.data))
    }).catch(err => {
      dispatch(IssueError(err))
    })
  }
}

export const createIssuesAct =(id, name, type) => {
  return dispatch => {
    return CallApi('issues/createIssues',
    'POST',
    {
      name: name,
      idproject: id,
      type: type
    },
    'token'
    ).then (respone => {
      dispatch(createIssue(respone.data))
    }).catch(err => {
      dispatch(IssueError(err))
    })
  }
}