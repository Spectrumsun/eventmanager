
import axios from 'axios';
import * as actionTypes from './actionsTypes';
import { errorHandler, successHandler } from '../../static/js/responsesHandler';

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

export const deleteCenter = (center) => {
  return {
    type: actionTypes.DELETE_CENTER,
    deleteCenter: center
  };
};

export const centerError = error => ({
  type: actionTypes.CENTER_ERROR,
  error
});


export const pagenation = pagination => ({
  type: actionTypes.PAGE_NATION,
  pagination
});


export const initCenters = (limit, page) => (dispatch) => {
  return axios.get(`/centers?limit=${limit}&page=${page}`)
    .then((res) => {
      dispatch(getAllCenters(res.data.result));
      dispatch(pagenation(res.data));
    })
    .catch((error) => {
      dispatch(centerError(error));
    });
};


export const getOneCenter = id => (dispatch) => {
 return axios.get(`/centers/${id}`)
    .then((res) => {
      dispatch(getSingleCenter(res.data.center));
    })
    .catch((error) => {
      dispatch(centerError(error));
    });
};


export const initPostCenters = (inputs, history) => (dispatch) => {
  return axios.post(`/centers?token=${localStorage.jwtToken}`, inputs)
    .then((res) => {
      successHandler(res);
      history.push('/centers');
      dispatch(addCenters(res.data.message));
    })
    .catch((error) => {
      errorHandler(error);
      dispatch(centerError(error));
    });
};


export const initEditCenter = (id, center, history) => (dispatch) => {
  return axios.put(`/centers/${id}?token=${localStorage.jwtToken}`, center)
    .then((res) => {
      successHandler(res)
      history.push('/centers');
      dispatch(editCenter(res.data.updatedCenter));
    })
    .catch((error) => {
      errorHandler(error);
      dispatch(centerError(error));
    });
};


export const initDeleteCenter = (id, history) => (dispatch) => {
  return axios.delete(`/centers/${id}?token=${localStorage.jwtToken}`)
    .then((res) => {
      successHandler(res);
      history.push('/centers');
      dispatch(deleteCenter(res.data.deletedCenter));
    })
    .catch((error) => {
      errorHandler(error);
      dispatch(centerError(error));
    });
};

