const { BadRequestError } = require("../routes/utils/errors");

//const { BadRequestError } = require("./routes/utils/errors");
class GiftExchange {
  // static GgetRandom(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random * (max - min) + min);
  // }
  static pairs(names) {
    if (!names) {
      throw "cannot make pairs without names";
    }
    if (names.length % 2 != 0) {
      throw new BadRequestError();
    }
    //var pairs = [];
    // var resnames = [...names];
    let currentIndex = names.length;
    while (currentIndex > 0) {
      const randomindex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [names[currentIndex], names[randomindex]] = [
        names[randomindex],
        names[currentIndex],
      ];
    }
    var arr = [];
    for (let i = 0; i < names.length; i++) {
      var curr = names[i];
      var nextIdx = i + 1;
      var nextName = names[nextIdx];
      var tuple = [curr, nextName];
      arr.push(tuple);
      i++;
    }
    // const firstperson = resnames.pop();
    //const randomindex = GiftExchange.GgetRandom(0, resnames.length);

    // const secondperson = resnames[randix];
    // resnames.splice(randix, 1);
    // if (firstperson && secondperson) {
    //   pairs.push([firstperson, secondperson]);
    // } else {
    //   throw "unexpected error pairing";
    // }
    // return pairs;

    return arr;
  }
  static traditional(names) {
    if (!names) {
      throw "cannot make pairs without names";
    }
    if (names.length % 2 != 0) {
      throw new BadRequestError();
    }
    //var pairs = [];
    // var resnames = [...names];
    let currentIndex = names.length;
    while (currentIndex > 0) {
      const randomindex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [names[currentIndex], names[randomindex]] = [
        names[randomindex],
        names[currentIndex],
      ];
    }
    var arr = [];
    for (let i = 0; i < names.length; i++) {
      var nextIdx = i + 1;
      if (nextIdx < names.length) {
        arr.push(names[i] + " is giving a gift to " + names[nextIdx]);
      } else {
        arr.push(names[i] + " is giving a gift to " + names[0]);
      }
    }

    return arr;
  }

  // static traditional(names) {
  //   if (!names) {
  //     throw "cannot make traditional without names";
  //   }
  //   const arr = [];
  //   const resnames = [...names];
  //   let currentPerson = resnames.pop();
  //   if (names.length % 2 != 0) {
  //     throw new error(" names can't be odd");
  //   }

  //   const firstperson = currentPerson;
  //   while (resnames.length > 0) {
  //     //  const firstperson=resnames.pop();
  //     const randix = GiftExchange.GgetRandom(0, resnames.length);
  //     const recipient = resnames[randix];
  //     resnames.splice(randix, 1);
  //     const newline = `${currentPerson} is giving a gift to ${recipient} `;
  //     currentPerson = recipient;
  //     arr.push(newline);
  //   }
  //   return arr;
  // }
}

module.exports = GiftExchange;
