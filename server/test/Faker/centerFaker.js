import faker from 'faker';

const userfake = {
  newCenter: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: faker.random.arrayElement(),
    about: 'this is a test',
    availability: 'availability',
    imageurl: 'pictue.png',
    publicUrlId: 'picture'
  },
  newCenter1: {
    name: faker.name.findName(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    facility: faker.random.arrayElement(),
  }
};

export default userfake;
