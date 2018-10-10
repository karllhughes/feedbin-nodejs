Feedbin Nodejs wrapper
======================

This is a simple unofficial wrapper for Feedbin RSS reader.

How to use
----------
Easy! Pass credentials to constructor and optionally a host (skip it for using the official one).

`Feedbin-nodejs` methods for interacting with Feedbin will always return a `Promise`.

See API docs (wip) for all available methods.

``` javascript
const Feedbin = require('feedbin-nodejs');

const feedbin = new Feedbin('username', 'password', 'https://optional.host.com/');

// feedbin is ready to use now
feedbin.subscriptions.getAll()
	.then(subscriptions => {
		console.log(subscriptions);
	});

feedbin.entries.getUnread()
	.then(unread => {
		console.log(unread);
	});
```


Testing
-------

Run the unit tests with `npm test`.

If you want to run complete integration tests (they will make actual API calls), then run `FEEDBIN_USERNAME={Your Username} FEEDBIN_PASSWORD={Your Password} npm test`.


Contributors
-------

- [Marios Antonoudiou](https://github.com/mariosant)
- [Karl Hughes](https://github.com/karllhughes)


Roadmap
-------

* Add documentation
* Add tests

Feel free to contribute!
