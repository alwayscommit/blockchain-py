//mocha framework

const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage
  //before each of our tests, we deploy a new contract to work with.
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it("Should start with a fav number of 0", async function () {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    assert.equal(currentValue.toString(), expectedValue)
  })
})
