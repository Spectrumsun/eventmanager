/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';
import toast from 'toastr';

function errorHandler(error) {
  const newError = error.response.data.errorMessage
  newError ? newError.map(err => 
  toast.error(err)) : toast.error(
  error.response.data.message)
}


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
        toast.success(res.data.message)
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
          .then((response) => {
            toast.success(response.data.message)
            history.push('/events')
            dispatch(editEvent(response.data.event))
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
          .then((response) => {
            toast.success(response.data.message)
            history.push('/events')
            dispatch(deleteEvent(response.data))
          })
          .catch((error) => {
            dispatch(eventError(error))
            toast.error(error.response.data.message)
        }
    )
  }
}