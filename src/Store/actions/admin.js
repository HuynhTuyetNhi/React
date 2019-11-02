import * as actionTypes from "../constants/admin";
import CallApi from "../../until/apiCaller";

export const Search = data => {
  return {
    type: actionTypes.SearchSuccess,
    data: data
  };
};
export const SearchError = name => {
  return {
    type: actionTypes.SearchError,
    message: name
  };
};
export const EditUser = (user) =>{
  return {
      type: actionTypes.EditUserSuccess,
      data: user
  }
}
export const EditUserFail = (name) =>{
  return {
      type: actionTypes.EditUserFail,
      message: name
  }
}
export const EditUserAction = (id,user) =>{
  return dispatch =>{
      return CallApi(`auth/editProfile/${id}`,'PUT',
      {
          gender : user[0].gender,
          avatar: user[0].avatar,
          name:user[0].name,
          birthdate: user[0].birthday
      },
      'token'
      ).then(response =>{
          if(response.data.result.length !== 0){
              dispatch(EditUser(response.data.result))
          }
      })
      .catch(err =>{
         dispatch(EditUserFail(err))
      })
  }
}
export const SearchAction = email => {
  return dispatch => {
    return CallApi(
      "auth/findUserLikeEmail",
      "POST",
      {
        email: email
      },
      'token'
    )
      .then(respone => {
        if (respone.data.result.length !== 0) {
          dispatch(Search(respone.data.result));
        } else {
          dispatch(SearchError("Error"));
        }
      })
      .catch(error => {
        dispatch(SearchError(error));
      });
  };
};
