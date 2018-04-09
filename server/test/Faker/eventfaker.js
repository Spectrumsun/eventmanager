import faker from 'faker';

const userfake = {
  newEvent: {
    name: faker.name.findName(),
    date: faker.date.future(),
    time: '12:00',
    purpose: faker.lorem.sentences(),
    center: 1
  },
  newEvent2: {
    name: faker.name.findName(),
    date: faker.date.future(),
    time: '13:00',
    purpose: faker.lorem.sentences(),
    center: 2
  },
  newCenter: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: faker.random.arrayElement(),
  },
  newCenter1: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: faker.random.arrayElement(),
  }
};

export default userfake;
