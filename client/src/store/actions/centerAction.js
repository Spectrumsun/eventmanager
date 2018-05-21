
import * as actionTypes from './actionsTypes';
import axios from 'axios';
import toast from 'toastr';

export const getAllCenters = center => ({
  type: actionTypes.GET_ALL_CENTERS,
  center
});

export const getSingleCenter = center => ({
  type: actionTypes.GET_SINGLE_CENTER,
  loadedCenter: center
});


export const addCenters = center => ({
  type: actionTypes.ADD_CENTER,
  newCenter: center
});


export const editCenter = center => ({
  type: actionTypes.EDIT_CENTER,
  editCenter: center
});


export const centerError = error => ({
  type: actionTypes.CENTER_ERROR,
  error
});


export const pagenation = pagination => ({
  type: actionTypes.PAGE_NATION,
  pagination
});


export const initCenters = (limit, page) => (dispatch) => {
  axios.get(`/centers?limit=${limit}&page=${page}`)
    .then((res) => {
      dispatch(getAllCenters(res.data.result));
      dispatch(pagenation(res.data));
    })
    .catch((error) => {
      dispatch(centerError(error));
    });
};


export const getOneCenter = id => (dispatch) => {
  axios.get(`/centers/${id}`)
    .then((res) => {
      dispatch(getSingleCenter(res.data.center));
    })
    .catch((error) => {
      dispatch(centerError(error));
    });
};


export const initPostCenters = (inputs, history) => (dispatch) => {
  axios.post(`/centers?token=${localStorage.jwtToken}`, inputs)
    .then((response) => {
      toast.success(response.data.message);
      history.push('/centers');
      dispatch(addCenters(response.data.messgae));
    })
    .catch((error) => {
      const newError = error.response.data.errorMessage;
      newError ? newError.map(err =>
        toast.error(err)) : toast.error(error.response.data.message);
      dispatch(centerError(error));
    });
};


export const initEditCenter = (id, center, history) => (dispatch) => {
  axios.put(`/centers/${id}?token=${localStorage.jwtToken}`, center)
    .then((response) => {
      toast.success(response.data.message);
      history.push('/centers');
      dispatch(editCenter(response.data.center));
    })
    .catch((error) => {
      const newError = error.response.data.errorMessage;
      newError ? newError.map(err =>
        toast.error(err)) : toast.error(error.response.data.message);
      dispatch(centerError(error));
    });
};


export const initDeleteCenter = (id, history) => (dispatch) => {
  axios.delete(`/centers/${id}?token=${localStorage.jwtToken}`)
    .then((response) => {
      toast.success(response.data.message);
      history.push('/centers');
    })
    .catch((error) => {
      toast.error(error.response.data.message);
      dispatch(centerError(error));
    });
};

