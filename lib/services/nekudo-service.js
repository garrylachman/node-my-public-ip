const BaseService = require('./base-service');

module.exports = class NekudoService extends BaseService {
	get defaults() {
		return {
			'method': this.methods.GET,
			'url': 'http://geoip.nekudo.com/api',
		};
	}
	constructor(options = {}) {
		super(options);
	}
	parse(data) {
		this.response.ip = data.ip;
		this.response.countryName = data.country.name;
		this.response.countryCode = data.country.code;
		this.response.region = data.region;
		this.response.city = data.city;
		this.response.lat = data.location.latitude;
		this.response.lon = data.location.longitude;
		this.response.timezone = data.location.time_zone;

		return this.response.toObject();
	}
}
