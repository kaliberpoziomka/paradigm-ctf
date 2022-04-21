import { expect } from "chai";
import { Contract, ContractFactory, Signer } from "ethers";
import { ethers } from "hardhat";

let setup: Contract; // setup contract
let Setup: ContractFactory;
let tx: any;
let owner: Signer;
let attacker: Signer;

// Deploying Setup contract
beforeEach(async () => {
  [owner, attacker] = await ethers.getSigners();

  Setup = await ethers.getContractFactory("contracts/hello/public/contracts/Setup.sol:Setup", owner);
  setup = await Setup.deploy();
  await setup.deployed();
});

// Calling solve() method of Hello contract
it("solves the challenge", async function () {
  const helloAddr = await setup.hello();
  const hello = await ethers.getContractAt("Hello", helloAddr, attacker);
  tx = await hello.solve();
  await tx.wait();

  expect(await setup.isSolved()).to.be.true;
});
