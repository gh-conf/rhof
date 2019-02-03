# rhof

<!-- Add Badges here -->

Fetch contributors list of github repository and generate hall of fame for github readme

## Install

```
$ yarn add rhof
```

## Usage

```javascript

const rhof = require('rhof');

(async () => {
  try {
    const username = 'arshadkazmi42'; //github username
    const repository = 'gh-rhof'; // github repository name
    const hof = await rhof(username, repository);
    console.log(hof);
    // <a href='https://github.com/arshadkazmi42)'><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
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

<a href="https://github.com/arshadkazmi42)"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>