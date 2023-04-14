var faker = require('faker');

var database = { products: [], users:[], contacts: [] };

// generate user, contact
for (var i = 1; i <= 10; i++) {
  database.users.push({
    id: i,
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  });
  database.contacts.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    city: faker.address.city(),
    country: faker.address.country(),
    title: faker.name.title()		
  });
}
// generate products
for (var i = 1; i <= 100; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));
// node fakerData.js > db.json