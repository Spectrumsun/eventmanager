
const event = {
  addEvent: {
    id: 1,
    eventName: 'Wedding Party',
    eventdate: '2018-06-11',
    time: '12:00',
    purpose: 'for love',
    centerId: 1,
    userId: 18
  },

  allEvent: {
    message: 'success',
    event: [
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
  },

  oneEvent: {
    message: 'Event',
    event: {
      id: 1,
      eventName: 'Wedding Party',
      eventdate: '2018-06-11',
      time: '12:00',
      purpose: 'for love',
      createdAt: '2018-04-14T20:19:04.584Z',
      updatedAt: '2018-04-14T20:19:04.584Z',
      centerId: 1,
      userId: 18,
      centers: {
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
        userId: 18
      }
    }
  },

  editEvfent: {
    id: 1,
    eventName: 'Wedding Party 4',
    eventdate: '2018-07-11',
    time: '12:00',
    purpose: 'for love',
    centerId: 1,
    userId: 18
  },

  deleteCenter: {
    message: 'event successfully deleted!'
  }


};

export default event;

