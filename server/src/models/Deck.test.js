const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { User } = require('./User')
const {sequelize} = require('../db/config')


// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  deck = await Deck.create({ 
    name: 'diamond',
    xp: 1000
 })
})

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('Deck Model', () => {

  test('can load a deck with its cards', async () => {
    let foundDeck = Deck.create({
      name: "diamond",
      xp: 1000
    })
    expect(foundDeck).toBeInstanceOf(Object);
  });

  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  });

  it('has a name', async () => {
    expect(deck).toHaveProperty('name')
  });

  it("should have the correct name", async () => {
    expect(deck.name).toBe("diamond");
  });

  it("should have the correct xp", async () => {
    expect(deck.xp).toBe(1000);
  });
 
  it("shoud have correct data types", async () => {
    expect(typeof deck.id).toBe("number");
    expect(typeof deck.name).toBe("string");  
    expect(typeof deck.xp).toBe("number");  
  });

})