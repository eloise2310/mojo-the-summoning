const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { User } = require('./User')
const {sequelize} = require('../db/config')


// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  attack = await Attack.create({ 
    title: "Fireball",
    mojoCost: 100,
    staminaCost: 70
 });
});

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('Attack Model', () => {

  // test('can load a card with its attacks', async () => {
  //   const foundCard = await Card.findByPk(card.id, { include: Attack });
  //   expect(foundCard.Attacks.length).toBe(1);
  //   expect(foundCard.Attacks[0].title).toBe('Fireball');
  // });

  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  });

  it('has a title', async () => {
    expect(attack).toHaveProperty('title')
  });

  it('has a mojo cost', async () => {
    expect(attack).toHaveProperty('mojoCost')
  });

  it('has a stamina cost', async () => {
    expect(attack).toHaveProperty('staminaCost')
  });

  it("should have the correct mojo cost", async () => {
    expect(attack.mojoCost).toBe(100);
  });

  it("should have the correct title", async () => {
    expect(attack.title).toBe("Fireball");
  });
 
  it("should have the correct stamina cost", async () => {
    expect(attack.staminaCost).toBe(70);
  });

  it("shoud have correct data types", async () => {
    expect(typeof attack.id).toBe("number");
    expect(typeof attack.title).toBe("string");  
    expect(typeof attack.mojoCost).toBe("number"); 
    expect(typeof attack.staminaCost).toBe("number"); 
  });

})