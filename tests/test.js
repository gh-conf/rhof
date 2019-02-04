const expect = require('chai').expect;

const rhof = require('../index');

const CONTRIBUTOR_ARSHAD_HOF = '<a href="https://github.com/';


describe('Should generate the required hof', () => {
  it('should have arshad hof as start value for gh-conf/rhof repo', async () => {
    const hof = await rhof('gh-conf', 'rhof');
    expect(typeof hof).to.equal('string');
  });
  it('should have arshad hof as start value for arshadkazmi42/gh-rhof repo', async () => {
    const hof = await rhof('arshadkazmi42', 'gh-rhof');
    expect(typeof hof).to.equal('string');
  });
});
