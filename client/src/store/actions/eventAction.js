/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';

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


export const initPostEvent = (event) => {
  return dispatch => {
    axios.post('/events')
      .then((response) => {
        dispatch(postEvent(response.data.message));
        console.log(getAllEvent(response))
      })
      .catch((error) => {
       dispatch(eventError(error.response.data.message))
       console.log(error.response.data);
      });
  };
};


export const initEditEvent = (id, events) => {
  return  dispatch => {
     axios.put(`/events/${id}`, events)
          .then((res) => {
            dispatch(editEvent(res.data.message))
            //console.log(data)
          })
          .catch((error) => {
            dispatch(eventError(error.response.data.message))
            console.log(error.response.data);
        }
    )
  }
}


export const initDeleteEvent = (id) => {
  return  dispatch => {
     axios.delete(`/events/${id}`)
          .then((res) => {
            dispatch(deleteEvent(res.data.message))
            //console.log(data)
          })
          .catch((error) => {
            dispatch(eventError(error.response.data.message))
            console.log(error.response.data);
        }
    )
  }
}