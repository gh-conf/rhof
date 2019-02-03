const { fetchContributors } = require('./lib');


const rhof = async (username, repository) => {

  // If username/repository is empty or undefined
  if (!username || !repository) {
    throw 'Username and repository are required';
  }

  return await fetchContributors(username, repository);
};


module.exports = rhof;
