module.exports = class PublicIp {
	constructor() {
		/* Services, we dont use dynamic require to allow bundle with nexe & enclosejs */
		this.services = [
			require('./services/ip-api-service'),
			require('./services/freegeoip-service'),
			require('./services/ipfind-service'),
			require('./services/ipapi-co-service'),
			require('./services/ipinfo-service'),
			require('./services/nekudo-service'),
			require('./services/keycdn-service'),
		].map((service) => {
			return new service();
		});
	}
	find() {
		return new Promise((resolve, reject) => {
			let next = (promises) => {
        if (promises.length == 0) {
          reject();
        }
        let p = promises.shift();
				p.run()
					.then((res) => resolve(res))
					.catch((err) => next(promises));
			}
			next(Array.from(this.services));
		});
	}
}
