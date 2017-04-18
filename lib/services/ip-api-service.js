const BaseService = require('./base-service');

module.exports = class IpApiService extends BaseService {
	get defaults() {
		return {
			'method': this.methods.GET,
			'url': 'http://ip-api.com/json',
		};
	}
	constructor(options = {}) {
		super(options);
	}
	parse(data) {
		this.response.ip = data.query;
		this.response.countryName = data.country;
		this.response.countryCode = data.countryCode;
		this.response.region = data.regionName;
		this.response.city = data.city;
		this.response.isp = data.as;
		this.response.lat = data.lat;
		this.response.lon = data.lon;
		this.response.timezone = data.timezone;

		return this.response.toObject();
	}
}
