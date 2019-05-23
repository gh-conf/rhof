const { GH_TEMPLATES } = require('@gh-conf/gh-conf-constants');
const Strmat = require('strmat');


/**
 * Formats the contributors list to form hall of fame, 
 * with contributor profile and avatar
 * @param {Array} contributors 
 */
const formatHof = (contributors) => {

  let hof = '';
  for (let i = 0; i < contributors.length; i++) {
    hof = `${hof}${Strmat.format(GH_TEMPLATES['HOF_TEMPLATE'], {'username': contributors[i].login})}`;
  }

  return hof;
};


module.exports = formatHof;
