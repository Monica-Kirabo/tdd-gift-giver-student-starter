class GiftExchange {
  static pairs(names) {
    var res = [];

    if (names.length % 2 != 0) {
      throw new error(" names can't be odd");
    } else {
      var namearr3 = 10;

      for (var i = 0; i < names.length; i++) {
        var namearr = names[math.floor(math.random() * names.length)];
        var namearr2 = names[math.floor(math.random() * names.length)];
        if (namearr != namearr2) {
          namearr3[i] = namearr;
          namearr3[i + 1] = namearr2;
        }
      }

      return namearr3;
    }
  }

  static traditional(names) {}
}
module.exports = GiftExchange;
