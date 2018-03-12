/* eslint-disable */
import * as actionTypes from './actionsTypes';
import axios from 'axios';
import toast from 'toastr';

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

export const addCenters = (center) => {
  return {
    type: actionTypes.ADD_CENTER,
    newCenter: center
  }
}

export const editCenter = (center) => {
  return {
    type: actionTypes.EDIT_CENTER,
    editCenter: center
  }
}

export const centerError = (error) => {
  return {
    type: actionTypes.CENTER_ERROR,
     error: error
    
    }
};


export const initCenters = () => {
  return dispatch => {
    axios.get('/centers')
      .then((res) => {
        dispatch(getAllCenters(res.data.center));
      })
      .catch((error) => {
        dispatch(centerError(error.response.data.message))
        console.log(error);
      });
  };
};



export const getOneCenter = (id) => {
  return dispatch => {
     axios.get(`/centers/${id}`)
          .then((res) => {
            dispatch(getSingleCenter(res.data.center))
          })
          .catch((error) => {
            dispatch(centerError(error.response.data.message))
          }
      )
  }
}



export const initPostCenters = (inputs, history) => {
  return dispatch => {
    axios.post('/centers?token='+localStorage.jwtToken, inputs)
      .then((response) => {
        toast.success(response.data.message)
        history.push('/centers')
        dispatch(addCenters(response.data.messgae));
      })
      .catch((error) => {
        const newError = error.response.data.errorMessage;
        newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message);
        dispatch(centerError(error.response.data.message))
      });
  };
};


export const initEditCenter = (id, center, history) => {
  return  dispatch => {
     axios.put(`/centers/${id}?token=`+localStorage.jwtToken, center)
          .then((response) => {
            toast.success(response.data.message)
            history.push('/centers')
            dispatch(editCenter(response.data.center))
          })
          .catch((error) => {
            const newError = error.response.data.errorMessage;
            newError ? newError.map(err => toast.error(err)) : toast.error(error.response.data.message);
            dispatch(centerError(error.response.data.message))
          }
      )
  }
}




export const initDeleteCenter = (id, history) => {
  return  dispatch => {
     axios.delete(`/centers/${id}?token=`+localStorage.jwtToken)
          .then((response) => {
            toast.success(response.data.message)
            history.push('/centers')
          })
          .catch((error) => {
            toast.error(error.response.data.message)
        }
    )
  }
}



