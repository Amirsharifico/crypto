const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const cryptoHash = require('./crypto-hash')

describe("Block", () => {
  const timeStamp = "123456";
  const lastHash = "foo-hash";
  const hash = "bar-hash";
  const data = ["blockchain", "data"];
  const block = new Block({
    timeStamp,
    lastHash,
    hash,
    data,
  });
  it("has a time stamp, lastHash, hash and data property", () => {
    expect(block.timeStamp).toEqual(timeStamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
  describe("genesis()", () => {
    const genesisBlock = Block.genesis();
    it("returns a block instance", () => {
      expect(genesisBlock instanceof Block).toEqual(true);
    });
    it("returns the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
  describe("mineBlock", () => {
    const lastBlock = Block.genesis();
    const data = "mined data";
    minedBlock = Block.mineBlock({ lastBlock, data });

    it("returnd block instance", () => {
      expect(minedBlock instanceof Block).toEqual(true);
    });
    it("sets the `lastHash` to the `hash` of the lastblock ", () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });
    it("sets the `data` ", () => {
      expect(minedBlock.data).toEqual(data);
    });
    it("sets the `timeStamp` ", () => {
      expect(minedBlock.timeStamp).not.toEqual(undefined);
    });

    it('creates a SHA-256 `hash` based on the proper input', ()=>{
      expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timeStamp, lastBlock.hash, data))
    })
  });
});
