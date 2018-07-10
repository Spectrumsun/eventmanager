import axios from 'axios';

const uploadImage = (arg, aerg2) =>
  axios.post(process.env.CLOUNDINARY_API, arg, aerg2);


export default uploadImage;


export const imageUrl = 'https://res.cloudinary.com/skybound/' +
                'image/upload/s--FNAPSR5p--' +
                '/v1524387956/eventmanager/' +
                '1524387954621-99fa41ccf13172' +
                '4-a-nw-p.jpg.jpg';