const fetch = require('node-fetch');

const CONSTANTS = require('./constants');
const formatHof = require('./format-hof');

/**
 * Uses username and repository to build the contributors url
 * Fetches all the contributors for the repository
 * This api has a throtling for 60 requests per hour
 * @param {String} username 
 * @param {String} repository 
 */
const fetchContributors = async (username, repository) => { // eslint-disable-line no-unused-vars

  const response = await fetch(eval('`' + CONSTANTS.GITHUB_CONTRIBUTORS_URL + '`'));
  const contributors = await response.json();
  return formatHof(contributors);
};


module.exports = fetchContributors;
