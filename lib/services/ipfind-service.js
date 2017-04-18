const BaseService = require('./base-service');

module.exports = class IpFindService extends BaseService {
	get defaults() {
		return {
			'method': this.methods.GET,
			'url': 'https://ipfind.co/me',
		};
	}
	constructor(options = {}) {
		super(options);
	}
	parse(data) {
		this.response.ip = data.ip_address;
		this.response.countryName = data.country;
		this.response.countryCode = data.country_code;
		this.response.region = data.region;
		this.response.city = data.city;
		this.response.lat = data.latitude;
		this.response.lon = data.longitude;
		this.response.timezone = data.timezone;
		this.response.continent = data.continent;

		return this.response.toObject();
	}
}
