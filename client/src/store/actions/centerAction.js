/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const getAllCenters = (center) => {
  return {
    type: actionTypes.GET_ALL_CENTERS,
    center: center
    }
};


export const initCenters = () => {
  return dispatch => {
    axios.get('/centers')
      .then((res) => {
        const data = res.data.center
        dispatch(getAllCenters(data));
        //console.log(getAllCenters(data))
      })
      .catch((error) => {
       // console.log(error);
      });
  };
};