import axios from 'axios';

const uploadImage = (arg, aerg2) =>
  axios.post(process.env.CLOUNDINARY_API, arg, aerg2);


export default uploadImage;
