/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const getAllEvent = (event) => {
  return {
    type: actionTypes.GET_ALL_EVENT,
    event: event 
    }
};

export const getOneEvent = (event) => {
  return {
    type: actionTypes.GET_SINGLE_EVENT,
    loadedEvent: event
  }
} 


export const eventError = (error) => {
  return {
    type: actionTypes.EVENT_ERROR,
    error: error
    
    }
};


export const initEvents = () => {
  return dispatch => {
    axios.get('/events')
      .then((response) => {
        dispatch(getAllEvent(response.data.event));
        console.log(getAllEvent(response))
      })
      .catch((error) => {
       dispatch(eventError(error.response.data.message))
       console.log(error.response.data);
      });
  };
};


export const initGetOneEvent = (id) => {
  return  dispatch => {
     axios.get(`/events/${id}`)
          .then((res) => {
            dispatch(getOneEvent(res.data.event))
            //console.log(data)
          })
          .catch((error) => {
            dispatch(eventError(error.response.data.message))
        }
    )
  }
}