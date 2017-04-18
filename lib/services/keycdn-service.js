const BaseService = require('./base-service');

module.exports = class KeyCdnService extends BaseService {
	get defaults() {
		return {
			'method': this.methods.GET,
			'url': 'https://tools.keycdn.com/geo.json',
		};
	}
	constructor(options = {}) {
		super(options);
	}
	parse(data) {
		const geoData = data.data.geo;
		this.response.ip = geoData.ip;
		this.response.isp  = geoData.isp;
		this.response.countryName = geoData.country_name;
		this.response.countryCode = geoData.country_code;
		this.response.region = geoData.region;
		this.response.city = geoData.city;
		this.response.lat = geoData.latitude;
		this.response.lon = geoData.longitude;
		this.response.timezone = geoData.timezone;

		return this.response.toObject();
	}
}
