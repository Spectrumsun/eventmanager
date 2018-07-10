
import toast from 'toastr';

toast.options = {
  progressBar: true,
};

const reWhiteSpace = new RegExp(/^\s+$/);

export const checkEvent = (name, startDate, endDate, time, purpose, center, callback) => {
  const done = 'pass';
  const err = 'failed';
  if (name === '') {
    toast.error('Event Name cannot be blank');
  } else if (reWhiteSpace.test(name) === true) {
    toast.error('Event Name cannot white space');
  } else if (startDate === '') {
    toast.error('Event start date cannot be blank');
  } else if (endDate === '') {
    toast.error('Event end date cannot be blank');
  } else if (endDate < startDate) {
    toast.error('!Event end date cannot be behind event start date');
  } else if (time === '') {
    toast.error('Event Time cannot be blank');
  } else if (purpose === '') {
    toast.error('Event Purpose cannot be blank');
  } else if (center === '') {
    toast.error('You have to choose a Center');
  } else {
    callback(err, done);
  }
};


export const checkCenter = (name, city, address, about, availability, facility, image, callback) => {
  const done = 'pass';
  const err = 'failed';
  if (name === '') {
    toast.error('Center Name cannot be blank');
  } else if (city === '') {
    toast.error('Center city cannot be blank');
  } else if (address === '') {
    toast.error('Center address cannot be blank');
  } else if (about === '') {
    toast.error('Center about cannot be blank');
  } else if (availability === '') {
    toast.error('Center Availability must be set');
  } else if (facility.length < 1) {
    toast.error('Center facility must be set');
  } else if (image === '') {
    toast.error('Add an image');
  } else {
    callback(err, done);
  }
};


export const uploadError = () => {
  toast.error('Unable to upload. Check your internet');
};


export const checkSingUp = (fullname, email, password, confirmPassword, callback) => {
  const done = 'pass';
  const err = 'failed';
  if (fullname === '') {
    toast.error('Full Name cannot be blank');
  } else if (email === '') {
    toast.error('Email cannot be blank');
  } else if (password === '') {
    toast.error('Password cannot be blank');
  } else if (password !== confirmPassword) {
    toast.error('Confirm Password dont match Password');
  } else if (password.length < 6) {
    toast.error('Password cannot be less than 6 Characters');
  } else {
    callback(err, done);
  }
};



export const checkLogin = (email, password, callback) => {
  const done = 'pass';
  const err = 'failed';
  if (email === '') {
    toast.error('Email cannot be blank');
  } else if (password === '') {
    toast.error('Password cannot be blank');
  } else {
    callback(err, done);
  }
};


// export const checkLogin = (email, password, callback) => {
//   const done = 'pass';
//   const err = 'failed';
//   if (email === '') {
//     toast.error('Email cannot be blank');
//   } else if (password === '') {
//     toast.error('Password cannot be blank');
//   } else {
//     callback(err, done);
//   }
// };

export const checkPasswordRest = (password, confirmPassword, callback) => {
  const done = 'pass';
  const err = 'failed';
  if (password === '') {
    toast.error('Password cannot be blank');
  } else if (password !== confirmPassword) {
    toast.error('Confirm Password dont match Password');
  } else if (password.length < 6) {
    toast.error('Password cannot be less than 6 Characters');
  } else {
    callback(err, done);
  }
};


export const checkForgotPassword = (email, callback) => {
  const done = 'pass';
  const err = 'failed';
  if (email === '') {
    toast.error('Email cannot be blank');
  } else {
    callback(err, done);
  }
};

export const checkAddAdmin = (email, role, callback) => {
  const done = 'pass';
  const err = 'failed';
  if (email === '') {
    toast.error('Email cannot be blank');
  } else if (role === '') {
    toast.error('role cannot be blank');
  } else {
    callback(err, done);
  }
};


export const checkAuthHoc = () => {
  toast.error('You need to LogIn First!');
};

export const checkAdminHoc = () => {
  toast.error('Only Admins allowed');
};
