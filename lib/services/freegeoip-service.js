const BaseService = require('./base-service');
const countries = require('i18n-iso-countries');

module.exports = class FreeGeoIpService extends BaseService {
	get defaults() {
		return {
			'method': this.methods.GET,
			'url': 'http://freegeoip.net/json/',
		};
	}
	constructor(options = {}) {
		super(options);
	}
	parse(data) {
		this.response.ip = data.ip;
		this.response.countryName = data.country_name;
		this.response.countryCode = data.country_code;
		this.response.region = data.region_name;
		this.response.city = data.city;
		this.response.lat = data.latitude;
		this.response.lon = data.longitude;
		this.response.time_zone = data.time_zone;

		return this.response.toObject();
	}
}
