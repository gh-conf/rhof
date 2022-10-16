const expect = require('chai').expect;

const rhof = require('../index');

const expectedString = '<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" />';

describe('Should generate the required hof', () => {
  it('should have arshad hof as start value for gh-conf/rhof repo', async () => {
    const hof = await rhof('gh-conf', 'rhof');
    expect(typeof hof).to.equal('string');
    expect(hof.startsWith(expectedString)).to.be.true;
  });
  it('should have arshad hof as start value for arshadkazmi42/gh-rhof repo', async () => {
    const hof = await rhof('arshadkazmi42', 'gh-rhof');
    expect(typeof hof).to.equal('string');
    expect(hof.startsWith(expectedString)).to.be.true;
  });
});
