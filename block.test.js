const Block = require("./block");
const { GENESIS_DATA } = require("./config");


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
    expect(block.timeStamp).toEqual(timeStamp)
    expect(block.lastHash).toEqual(lastHash)
    expect(block.hash).toEqual(hash)
    expect(block.data).toEqual(data)
  });
  describe('genesis()', ()=>{
    const genesisBlock= Block.genesis();
    console.log('genesis block: ', genesisBlock)
    it('returns a block instance', ()=>{
      expect(genesisBlock instanceof Block).toEqual(true);
    })
    it('returns the genesis data', ()=>{
      expect(genesisBlock).toEqual(GENESIS_DATA);
    })
  })
});
