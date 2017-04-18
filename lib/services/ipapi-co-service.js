const BaseService = require('./base-service');

module.exports = class IpApiCoService extends BaseService {
	get defaults() {
		return {
			'method': this.methods.GET,
			'url': 'https://ipapi.co/json',
		};
	}
	constructor(options = {}) {
		super(options);
	}
	parse(data) {
		this.response.ip = data.ip;
		this.response.countryName = data.country_name;
		this.response.countryCode = data.country;
		this.response.region = data.region;
		this.response.city = data.city;
		this.response.lat = data.latitude;
		this.response.lon = data.longitude;
		this.response.timezone = data.timezone;

		return this.response.toObject();
	}
}
