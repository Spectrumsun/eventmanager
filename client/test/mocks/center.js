
const center = {
  addCenter: {
    centerName: 'Yaba center',
    city: 'Surulere',
    address: 'No 22, Yaba Road',
    about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    facility: ['table', 'chair', 'sound system'],
    availability: 'yes',
    imageurl: 'https://res.cloudinary.com/skybound/image/upload/v1522444978/eventmanager/static/image2.jpg',
    imageId: 'image2.jpg',
    userId: 18,
  },

  allCenter: {
    message: 'success',
    center: {
      id: 1,
      centerName: 'Yaba center',
      city: 'Surulere',
      address: 'No 22, Yaba Road',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      facility: [
        'table', 'chair', 'sound system'
      ],
      availability: 'yes',
      imageurl: 'https://res.cloudinary.com/skybound/image/upload/v1522444978/eventmanager/static/image2.jpg',
      imageId: 'image2.jpg',
      userId: 18,
      updatedAt: '2018-04-14T20:13:39.729Z',
      createdAt: '2018-04-14T20:13:39.729Z'
    }
  },

  oneCenter: {
    message: 'Center',
    center: {
      id: 1,
      centerName: 'Yaba center',
      city: 'Surulere',
      address: 'No 22, Yaba Road',
      availability: 'yes',
      imageurl: 'https://res.cloudinary.com/skybound/image/upload/v1522444978/eventmanager/static/image2.jpg',
      imageId: 'image2.jpg',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
      facility: null,
      createdAt: '2018-04-14T20:13:39.729Z',
      updatedAt: '2018-04-14T20:13:39.729Z',
      userId: 18,
      events: [
        {
          id: 1,
          eventName: 'Wedding Party',
          eventdate: '2018-06-11',
          time: '12:00',
          purpose: 'for love',
          createdAt: '2018-04-14T20:19:04.584Z',
          updatedAt: '2018-04-14T20:19:04.584Z',
          centerId: 1,
          userId: 18
        }
      ]
    }
  },

  editCenter: {
    centerName: 'Island center',
    city: 'Lagos Island',
    address: 'No 22, Marina Road',
    about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
    facility: ['table', 'chair', 'sound system'],
    availability: 'yes',
    imageurl: 'https://res.cloudinary.com/skybound/image/upload/v1522444978/eventmanager/static/image2.jpg',
    imageId: 'image2.jpg',
    userId: 18,
  },
  deleteCenter: {
    message: 'center successfully deleted!'
  }


};

export default center;

