const { repair, succeed } = require("./enhancer.js");
// test away!

it("should run tests", function() {
  expect(true).toBe(true);
});

describe("enhancer.js", function() {
  describe(".repair()", function() {
    it("should return an item where durability: 100", function() {
      expect(repair({ name: "name", durability: 10, enhancement: 10 })).toEqual(
        {
          name: "name",
          durability: 100,
          enhancement: 10
        }
      );
    });
  });
});

describe("enhancer.js", function() {
  describe(".succeed()", function() {
    it("should return an item where durability: 100", function() {
      expect(
        succeed({ name: "name", durability: 10, enhancement: 10 })
      ).toEqual({
        name: "name",
        durability: 10,
        enhancement: 11
      });
    });
    it("should not increase enhancement more than 20", function() {
      expect(
        succeed({ name: "name", durability: 10, enhancement: 20 })
      ).toEqual({ name: "name", durability: 10, enhancement: 20 });
    });
  });
});
