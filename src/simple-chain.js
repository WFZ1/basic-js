const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength() ) {
      this.chain = [];
      throw Error ('Position isn\'t correct!');
    }

    this.chain.splice(--position, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chaning = this.chain.join('~~');
    this.chain = [];
    return chaning;
  }
};

module.exports = chainMaker;
