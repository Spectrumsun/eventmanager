/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';
import { errorHandler, successHandler } from '../../static/js/responsesHandler';

export const getAllEvent = (events) => {
  return {
    type: actionTypes.GET_ALL_EVENT,
    events: events
    }
};

export const getOneEvent = (events) => {0
  return {
    type: actionTypes.GET_SINGLE_EVENT,
    loadEvent: events
  }
} 

export const postEvent = (events) => {
  return {
    type: actionTypes.ADD_EVENT,
    addEvent: events
  }
}

export const editEvent = (events) => {
  return {
    type: actionTypes.EDIT_EVENT,
    editEvent: events
  }
}

export const deleteEvent = (events) => {
  return {
    type: actionTypes.DELETE_EVENT,
    deleteEvent: events
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
  return  axios.get('/events?token='+localStorage.jwtToken)
      .then((res) => {
        dispatch(getAllEvent(res.data.event));
      })
      .catch((error) => {
       dispatch(eventError(error))
      });
  };
};


export const initGetOneEvent = (id) => {
  return  dispatch => {
    return axios.get(`/events/${id}`)
          .then((res) => {
            dispatch(getOneEvent(res.data.event))
          })
          .catch((error) => {
            dispatch(eventError(error))
        }
    )
  }
}


export const initPostEvent = (event, history) => {
  return dispatch => {
    return axios.post('/events?token='+localStorage.jwtToken, event)
      .then((res) => {
        successHandler(res)
        history.push('/events')
        dispatch(postEvent(res.data));
      })
      .catch((error) => {
        errorHandler(error)
        dispatch(eventError(error))
      });
  };
};



export const initEditEvent = (id, events, history) => {
  return  dispatch => {
  return  axios.put(`/events/${id}?token=`+localStorage.jwtToken, events)
          .then((res) => {
            successHandler(res)
            history.push('/events')
            dispatch(editEvent(res.data.updatedEvent))
          })
          .catch((error) => {
            errorHandler(error)
            dispatch(eventError(error))
        }
    )
  }
}


export const initDeleteEvent = (id, history) => {
  return  dispatch => {
  return   axios.delete(`/events/${id}?token=`+localStorage.jwtToken)
          .then((res) => {
            successHandler(res)
            history.push('/events')
            dispatch(deleteEvent(res.data.deletedEvent))
          })
          .catch((error) => {
            dispatch(eventError(error))
            errorHandler(error)
        }
    )
  }
}