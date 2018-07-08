import toast from 'toastr';

export const errorHandler = (error) => {
  const newError = error.response.data.errorMessage;
  newError ? newError.map(err =>
    toast.error(err)) : toast.error(error.response.data.message);
};


export const successHandler = (res) => {
  const success = res.data.message;
  toast.success(success);
};


export const logOutMessage = () =>
  toast.success('Logout Successfully');
