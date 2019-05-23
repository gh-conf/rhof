const { Contributors } = require('@gh-conf/gh-api');

const formatHof = require('./format-hof');

/**
 * Uses username and repository to build the contributors url
 * Fetches all the contributors for the repository
 * This api has a throtling for 60 requests per hour
 * @param {String} username 
 * @param {String} repository 
 */
const fetchContributors = async (username, repository) => {

  const contributors = await Contributors(username, repository);
  return formatHof(contributors);
};


module.exports = fetchContributors;
