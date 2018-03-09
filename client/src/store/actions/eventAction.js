/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';
import toast from 'toastr';

export const getAllEvent = (events) => {
  return {
    type: actionTypes.GET_ALL_EVENT,
    events: events
    }
};

export const getOneEvent = (events) => {
  return {
    type: actionTypes.GET_SINGLE_EVENT,
    loadEvent: events
  }
} 

export const postEvent = (events) => {
  return {
    type: actionType.ADD_EVENT,
    addEvent: events
  }
}

export const editEvent = (events) => {
  return {
    type: actionType.EDIT_EVENT,
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
    axios.get('/events')
      .then((response) => {
        dispatch(getAllEvent(response.data.event));
      })
      .catch((error) => {
       dispatch(eventError(error.response.data.message))
      });
  };
};


export const initGetOneEvent = (id) => {
  return  dispatch => {
     axios.get(`/events/${id}`)
          .then((res) => {
            dispatch(getOneEvent(res.data.event))
          })
          .catch((error) => {
            dispatch(eventError(error.response.data.message))
        }
    )
  }
}


export const initPostEvent = (event, history) => {
  console.log(event)
  return dispatch => {
    axios.post('/events', event)
      .then((response) => {
        toast.success(response.data.message)
        history.push('/events')
        dispatch(postEvent(response.data.message));
      })
      .catch((error) => {
        const newError = error.response.data.errorMessage;
        newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message);
        dispatch(eventError(error.response.data.message))
      });
  };
};


export const initEditEvent = (id, events, history) => {
  return  dispatch => {
     axios.put(`/events/${id}`, events)
          .then((response) => {
            toast.success(response.data.message)
            history.push('/events')
            dispatch(editEvent(response.data.message))
          })
          .catch((error) => {
            const newError = error.response.data.errorMessage;
            newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message);
            dispatch(eventError(error.response.data.message))
        }
    )
  }
}


export const initDeleteEvent = (id, history) => {
  return  dispatch => {
     axios.delete(`/events/${id}`)
          .then((response) => {
            toast.success(response.data.message)
            history.push('/events')
            dispatch(deleteEvent(response.data.message))
          })
          .catch((error) => {
            dispatch(eventError(error.response.data.message))
            toast.error(error.response.data.message)
            console.log(error.response.data);
        }
    )
  }
}