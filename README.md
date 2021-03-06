# rhof

<!-- Add Badges here -->
[![Build](https://img.shields.io/travis/com/gh-conf/rhof.svg)](https://travis-ci.com/gh-conf/rhof)
[![Contributors](https://img.shields.io/github/contributors/gh-conf/rhof.svg)](https://github.com/gh-conf/rhof/graphs/contributors)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/rhof.svg)](https://github.com/gh-conf/rhof)
[![LICENSE](https://img.shields.io/npm/l/@gh-conf/rhof.svg)](https://github.com/gh-conf/rhof/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@gh-conf/rhof.svg)](https://www.npmjs.com/package/@gh-conf/rhof)
[![NPM Downloads](https://img.shields.io/npm/dt/@gh-conf/rhof.svg)](https://www.npmjs.com/package/@gh-conf/rhof)


Fetch contributors list of github repository and generate hall of fame for github readme

## Install

```
$ npm i @gh-conf/rhof
```

## Usage

```javascript

const rhof = require('@gh-conf/rhof');

(async () => {
  try {
    const username = 'arshadkazmi42'; //github username
    const repository = 'gh-rhof'; // github repository name
    const hof = await rhof(username, repository);
    console.log(hof);
    // <a href='https://github.com/arshadkazmi42'><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
  } catch (error) {
    console.log(error);
  }
})();


```


## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/rhof/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who help in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a><a href="https://github.com/Sungmin-Park1"><img src="https://github.com/Sungmin-Park1.png" width="30" /></a><a href="https://github.com/riya09"><img src="https://github.com/riya09.png" width="30" /></a><a href="https://github.com/lokesh541"><img src="https://github.com/lokesh541.png" width="30" /></a><a href="https://github.com/ice-bit"><img src="https://github.com/ice-bit.png" width="30" /></a><a href="https://github.com/William-Bowden"><img src="https://github.com/William-Bowden.png" width="30" /></a><a href="https://github.com/mcscrambles"><img src="https://github.com/mcscrambles.png" width="30" /></a>
