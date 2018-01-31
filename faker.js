// Import Faker
const faker = require('faker');

// Gerenate Customers Function
let generateCustomers = () => {
  let clients = {};

  for (let i = 0; i < 100; i++) {
    let client = {
      _id: i + 154,
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
      country: 'United States',
      totalOrders: Math.floor(Math.random() * 10) + 1,
      imageURL: '../../assets/images/customers/avatar.png'
    }
    clients[i] = client;
  }
  return clients;
}

// Generate Orders Function
let generateOrders = () => {
  let shipments = {};

  for (let i = 0; i < 1; i++) {
    let shipment = {
      _id: i + 34,
      orderNum: Math.floor(Math.random() * 1000000) + 100000,
      orderNumber: '',
      customer: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
      country: 'United States',
      date: faker.date.past(),
      books: [
        {
          title: 'TensorFlow for Machine Intelligence',
          price: 22.99,
          imageURL: '../../assets/images/books/tensorflow.jpg'
        }
      ],
      totalBooks: Math.floor(Math.random() * 10) + 1,
      status: '',
      total: Number(faker.finance.amount())
    }
    shipments[i] = shipment;

    // Generate order number as string
    shipments[i].orderNumber = shipments[i].orderNum.toString();

    // Generate status
    let s = Math.floor(Math.random() * 3) + 1

    if (s === 1) shipments[i].status = 'Successful'
    if (s === 2) shipments[i].status = 'In Progress'
    if (s === 3) shipments[i].status = 'Failed'

    // Modify Date
    let d = shipments[i].date;
    let month = d.getMonth() + 1;
    let min = d.getMinutes();
    
    if (month === 1) month = 'Jan';
    if (month === 2) month = 'Feb';
    if (month === 3) month = 'Mar';
    if (month === 4) month = 'Apr';
    if (month === 5) month = 'May';
    if (month === 6) month = 'Jun';
    if (month === 7) month = 'July';
    if (month === 8) month = 'Aug';
    if (month === 9) month = 'Sep';
    if (month === 10) month = 'Oct';
    if (month === 11) month = 'Nov';
    if (month === 12) month = 'Dec';

    if (min === 0) min = '00';
    if (min === 1) min = '01';
    if (min === 2) min = '02';
    if (min === 3) min = '03';
    if (min === 4) min = '04';
    if (min === 5) min = '05';
    if (min === 6) min = '06';
    if (min === 7) min = '07';
    if (min === 8) min = '08';
    if (min === 9) min = '09';

    let modDate = (`${d.getFullYear()}, ${month} ${d.getDate()} ${d.getHours()}:${min}`);
    shipments[i].date = modDate;

  }
  return shipments;
}

// *********************************
// PROGRAM START
// *********************************

// Uncomment the line below to generate fake customers
// console.log(generateCustomers());

// Uncomment the line below to generate fake orders
// console.log(generateOrders());

// *********************************
// PROGRAM END
// *********************************