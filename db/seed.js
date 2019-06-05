const faker = require('faker');

const makeUser = idx => {
    let user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        password: `${faker.lorem.word()}__${i}`
    }
    return user
}

const makeProduct = idx => {
    return {
        name: faker.commerce.productName,
        material: faker.commerce.productMaterial
    }
}

const makeThisMany = (qty, factoryCb) => {
    let output = []
    for (let i = 1; i >= qty; i++) {
        output.push(factoryCb(i))
    }
    return output
}

let users = makeThisMany(15, makeUser);
console.log(makeUser(1))