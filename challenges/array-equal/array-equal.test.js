/*

  These are the tests. Run them by opening index.html
  Don't make any changes to this file.

*/

describe('Array Equal', () => {
  it('should compare equal arrays', () => {
    chai.expect(arrayEqual([1,2,3],[1,2,3])).to.be.true;
  });
  it('should compare unequal arrays', () => {
    chai.expect(arrayEqual([1,2,3],[1,2,4])).to.be.false;
    chai.expect(arrayEqual(['hi'],['hello'])).to.be.false;
  });
  it('should compare arrays of different lengths', () => {
    chai.expect(arrayEqual([1,2,3],[1,2,3,4])).to.be.false;
    chai.expect(arrayEqual([1,2,3,4],[1,2,3])).to.be.false;
  });
  it('should compare empty arrays', () => {
    chai.expect(arrayEqual([],[])).to.be.true;
  });
  it('should use strict equals', () => {
    chai.expect(arrayEqual(['1','2','3'],[1,2,3])).to.be.false;
  });
});
