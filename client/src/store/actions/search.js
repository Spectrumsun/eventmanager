
import axios from 'axios';
import toast from 'toastr';
import * as actionTypes from './actionsTypes';


export const searchCenter = searchResult => ({
  type: actionTypes.SEARCH_RESULT,
  searchReuslt: searchResult
});


export const centerError = error => ({
  type: actionTypes.SEARCH_ERROR,
  error
});


export const initSearchCenters =
(search, limit, page) => (dispatch) => {
  return axios
    .get(`/centers/search?searchString=${search}&limit=${limit}&page=${page}`)
    .then((res) => {
      dispatch(searchCenter(res.data));
    })
    .catch((error) => {
      dispatch(centerError(error));
      console.log(error)
      toast.error(error.data.error);
    });
};

