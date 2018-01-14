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

export const addCenters =(center) => {
  return {
    type: actionTypes.ADD_CENTER,
    newCenter: center
  }
}

export const editCenter =(center) => {
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
        //console.log(getAllCenters(data))
      })
      .catch((error) => {
        dispatch(centerError(error.response.data.message))
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
          }
      )
  }
}



export const initPostCenters = (inputs) => {
  return dispatch => {
    axios.post('/centers', inputs)
      .then((res) => {
        dispatch(addCenters(res.data.messgae));
        //console.log(getAllCenters(data))
      })
      .catch((error) => {
        dispatch(centerError(error.response.data.message))
       console.log(error);
      });
  };
};


export const initEditCenter = (id, center) => {
  return  dispatch => {
     axios.put(`/centers/${id}`, center)
          .then((res) => {
            dispatch(editCenter(res.data.center))
            //console.log(data)
          })
          .catch((error) => {
            dispatch(centerError())
          }
      )
  }
}
