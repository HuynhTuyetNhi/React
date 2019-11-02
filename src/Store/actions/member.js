import * as actionTypes from "../constants/member";
import CallApi from "../../until/apiCaller";

export const Search = data => {
  return {
    type: actionTypes.Success,
    data: data
  };
};
export const SearchError = name => {
  return {
    type: actionTypes.ErrorSearch,
    message: name
  };
};
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
          console.log(respone.data.result)
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
