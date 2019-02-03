const CONSTANTS = require('./constants');


/**
 * Formats the contributors list to form hall of fame, 
 * with contributor profile and avatar
 * @param {Array} contributors 
 */
const formatHof = (contributors) => {

  let hof = '';
  for (let i = 0; i < contributors.length; i++) {
    hof = `${hof}${CONSTANTS['HOF_TEMPLATE'].replace(/{{username}}/g, contributors[i].login)}`;
  }

  return hof;
};


module.exports = formatHof;
