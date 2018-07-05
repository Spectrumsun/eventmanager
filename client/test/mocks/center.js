
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

  message: 'successfully created',

  allCenter: {
    message: 'success',
    result: [
      {
        id: 1,
        centerName: 'Epic Towers',
        city: 'lagos',
        address: 'No 22 Tomato Street Lagos',
        availability: 'Yes',
        imageurl: 'https://res.cloudinary.com/skybound/image/upload/s--hNcvVc0X--/v1530533763/eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg.jpg',
        imageId: 'eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg',
        about: 'Lorem ipsum dolor sit amet, consetetur amet.',
        facility: [
          'sound system',
          'free wifi',
          'car pack',
          'projector'
        ],
        userId: 18
      },
      {
        id: 2,
        centerName: 'Towers Centers',
        city: 'lagos',
        address: 'No 22 Tomato Street Lagos',
        availability: 'No',
        imageurl: 'https://res.cloudinary.com/skybound/image/upload/s--hNcvVc0X--/v1530533763/eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg.jpg',
        imageId: 'eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg',
        about: 'Lorem ipsum dolor sit amet, consetetur amet.',
        facility: [
          'sound system',
          'free wifi',
          'car pack',
          'projector'
        ],
        userId: 18
      },
    ],
    count: 1,
    pages: 1
  },

  oneCenter: {
    message: 'Center',
    center: {
      centerName: 'Epic Towers',
      city: 'lagos',
      id: 2,
      address: 'No 22 Tomato Street Lagos',
      availability: 'Yes',
      imageurl: 'https://res.cloudinary.com/skybound/image/upload/s--hNcvVc0X--/v1530533763/eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg.jpg',
      imageId: 'eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      facility: [
        'sound system',
        'free wifi',
        'car pack',
        'projector'
      ],
      events: [
        {
          startDate: '2018-07-03',
          endDate: '2018-07-05'
        }
      ]
    }
  },

  addedCenter: {
    message: 'successfully created',
    center: {
      centerName: 'Epic Towers',
      city: 'lagos',
      id: 2,
      address: 'No 22 Tomato Street Lagos',
      availability: 'Yes',
      imageurl: 'https://res.cloudinary.com/skybound/image/upload/s--hNcvVc0X--/v1530533763/eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg.jpg',
      imageId: 'eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      facility: [
        'sound system',
        'free wifi',
        'car pack',
        'projector'
      ]
    }
  },

  editCenterDetails: {
    centerName: 'Epic Towers',
    city: 'Yaba',
    id: 2,
    address: 'No 22 Tomato Street Lagos',
    availability: 'Yes',
    imageurl: 'https://res.cloudinary.com/skybound/image/upload/s--hNcvVc0X--/v1530533763/eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg.jpg',
    imageId: 'eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg',
    about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    facility: [
      'sound system',
      'free wifi',
      'car pack',
      'projector'
    ],
  },

  updatedCenter: {
    message: 'updated',
    updatedCenter: {
      centerName: 'Epic Towers',
      city: 'Yaba',
      id: 2,
      address: 'No 22 Tomato Street Lagos',
      availability: 'Yes',
      imageurl: 'https://res.cloudinary.com/skybound/image/upload/s--hNcvVc0X--/v1530533763/eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg.jpg',
      imageId: 'eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      facility: [
        'sound system',
        'free wifi',
        'car pack',
        'projector'
      ],
      events: [
        {
          startDate: '2018-07-03',
          endDate: '2018-07-05'
        }
      ]
    }
  },
  deleteCenter: {
    message: 'center successfully deleted!',
    deletedCenter: {
      centerName: 'Epic Towers',
      city: 'Yaba',
      id: 2,
      address: 'No 22 Tomato Street Lagos',
      availability: 'Yes',
      imageurl: 'https://res.cloudinary.com/skybound/image/upload/s--hNcvVc0X--/v1530533763/eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg.jpg',
      imageId: 'eventmanager/1530533759981-big_2db9ca1873c31f7922dfd1366b7a56068f28e44b.jpg',
      about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      facility: [
        'sound system',
        'free wifi',
        'car pack',
        'projector'
      ],
    },
  },

  error: {
    data: 'errorMessage'
  },

  deleteCenterId: {
    id: 2
  }


};

export default center;

