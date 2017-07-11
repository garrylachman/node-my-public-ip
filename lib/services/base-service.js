const needle = require('needle');
const response = require('../response');

module.exports = class BaseService {
	get methods() {
		return {
			'POST': 'post',
			'GET': 'get',
		};
	}
	get defaults() {
		return {
			'method': this.methods.POST,
			'url': void 0,
		};
	}
	constructor(options = {}) {
		if (new.target == BaseService) {
			throw new TypeError("Cannot construct Abstract directly");
		}
		this.options = Object.assign(this.defaults, options);
		this.response = new response();
	}
	run() {
		return new Promise((resolve, reject) => {
			this.send()
				.then((data) => {
					try {
						resolve(this.parse(data));
					} catch (e) {
						reject(e);
					}
				})
				.catch((err) => reject(err));
		});
	}
	send() {
		return new Promise((resolve, reject) => {
			needle[this.options.method](this.options.url, {
				timeout: 10*1000
			},
			(err, res, body) => {
				if (err) {
					reject(err);
				} else {
					resolve(body);
				}
			});
		});
	}
	parse(data) {

	}
}
