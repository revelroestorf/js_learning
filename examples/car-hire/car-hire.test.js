/*

  These are the tests. Run them by opening index.html
  Don't make any changes to this file.

*/

describe('Car Hire Cost', function () {
  it('should calculate the cost for a single day', function () {
    chai.expect(carHireCost(1)).to.equal(40);
  });
  it('should calculate the cost for two days', function () {
    chai.expect(carHireCost(2)).to.equal(80);
  });
  it('should calculate the cost for three days', function () {
    chai.expect(carHireCost(3)).to.equal(100);
  });
  it('should calculate the cost for ten days', function () {
    chai.expect(carHireCost(10)).to.equal(350);
  });
});
