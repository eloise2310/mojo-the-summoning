const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { User } = require('./User')
const {sequelize} = require('../db/config')


// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  card = await Card.create({ 
    name: 'queen',
    mojo: 1000,
    stamina: 150,
    imgUrl: "thisisanimageurl"
 });
});

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('Card Model', () => {

  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  });

  it('has a name', async () => {
    expect(card).toHaveProperty('name')
  });

  it("should have the correct name", async () => {
    expect(card.name).toBe("queen");
  });

  it("should have the correct mojo", async () => {
    expect(card.mojo).toBe(1000);
  });

  it("should have the correct stamina", async () => {
    expect(card.stamina).toBe(150);
  });

  it("should have the correct imgUrl", async () => {
    expect(card.imgUrl).toBe("thisisanimageurl");
  });
 
  it("shoud have correct data types", async () => {
    expect(typeof card.id).toBe("number");
    expect(typeof card.name).toBe("string");  
    expect(typeof card.mojo).toBe("number");  
    expect(typeof card.stamina).toBe("number"); 
    expect(typeof card.imgUrl).toBe("string"); 
  });

})