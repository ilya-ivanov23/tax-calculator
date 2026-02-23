const { calculateTax } = require('../taxCalculator.js');

describe("Tax Calculator", function() {
  it("should return 0 for income 0", function() {
    expect(calculateTax(0)).toEqual(0);
  });

  it("should calculate correct tax for low income", function() {
    expect(calculateTax(5000)).toEqual(500);
  });

  it("should calculate correct tax for medium income", function() {
    expect(calculateTax(20000)).toEqual(3000);
  });

  it("should calculate correct tax for high income", function() {
    expect(calculateTax(100000)).toEqual(24000);
  });

  it("should return 0 for negative income", function() {
    expect(calculateTax(-100)).toEqual(0);
  });

  it("should correctly handle floating point income", function() {
    expect(calculateTax(100.50)).toEqual(10.05);
  });

  it("should return 0 if a string is passed", function() {
    expect(calculateTax("1000")).toEqual(0);
  });
});
