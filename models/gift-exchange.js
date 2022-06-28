//const { BadRequestError } = require("../utils/errors");
class GiftExchange {
  static GgetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random);
  }
  static pairs(names) {
    if (!names) {
      throw "cannot make pairs without names";
    }
    if (names.length % 2 != 0) {
      throw new error(" names can't be odd");
    }
    var resnames = [...names];
    while (resnames.length > 0) {
      const firstperson = resnames.pop();
      const randix = GiftExchange.GgetRandom(0, resnames.length);
      const secondperson = resnames[randix];
      resnames.splice(randix, 1);
      if (firstperson && secondperson) {
        pairs.push([firstperson, secondperson]);
      } else {
        throw "unexpected error pairing";
      }
    }
  }

  static traditional(names) {
    if (!names) {
      throw "cannot make traditional without names";
    }
    const arr = [];
    const resnames = [...names];
    let currentPerson = resnames.pop();
    if (names.length % 2 != 0) {
      throw new error(" names can't be odd");
    }

    const firstperson = currentPerson;
    while (resnames.length > 0) {
      //  const firstperson=resnames.pop();
      const randix = GiftExchange.GgetRandom(0, resnames.length);
      const recipient = resnames[randix];
      resnames.splice(randix, 1);
      const newline = "${currentPerson} is giving a gift to ${recipient} ";
      currentPerson = recipient;
      arr.push(newline);
    }
  }
}

module.exports = GiftExchange;
