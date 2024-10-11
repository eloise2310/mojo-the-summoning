const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { Card } = require('./Card')
const { Deck } = require('./Deck')
const { User } = require('./User')
const {sequelize} = require('../db/config')


// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

// clear db after tests
afterAll(async () => await sequelize.sync({ force: true }))

describe('User Model', () => {

  // test('can load a user with its decks', async () => {
  //   const foundUser = await User.findByPk(user.id, { include: Deck });
  //   expect(foundUser.Decks.length).toBe(1);
  //   expect(foundUser.Decks[0].name).toBe('Gandalf Deck');
  // });

  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  });

  it('has a username', async () => {
    expect(user).toHaveProperty('username')
  });

  it("should have the correct username", async () => {
    expect(user.username).toBe("gandalf");
  });
 
  it("shoud have correct data types", async () => {
    expect(typeof user.id).toBe("number");
    expect(typeof user.username).toBe("string");  
  });

})

  // it("can create a User", async function() {
  //   await User.bulkCreate(user);
  //   const foundUser = await User.findByPk(1);
  //   expect(foundUser).toEqual(expect.objectContaining(users[0]));
  // });



  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */

