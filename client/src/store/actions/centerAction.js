/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const getAllCenters = (center) => {
  return {
    type: actionTypes.GET_ALL_CENTERS,
    center: center
    }
};

export const getSingleCenter = (center) => {
  return {
    type: actionTypes.GET_SINGLE_CENTER,
    loadedCenter: center
  }
} 


export const centerError = () => {
  return {
    type: actionTypes.CENTER_ERROR
    
    }
};


export const initCenters = () => {
  return dispatch => {
    axios.get('/centers')
      .then((res) => {
        dispatch(getAllCenters(res.data.center));
        //console.log(getAllCenters(data))
      })
      .catch((error) => {
        dispatch(centerError())
       console.log(error);
      });
  };
};


export const getOneCenter = (id) => {
  return  dispatch => {
     axios.get(`/centers/${id}`)
          .then((res) => {
            dispatch(getSingleCenter(res.data.center))
            //console.log(data)
          })
          .catch((error) => {
            dispatch(centerError())
          })
    
  }
}