const BaseService = require('./base-service');
const countries = require('i18n-iso-countries');

module.exports = class IpinfoService extends BaseService {
	get defaults() {
		return {
			'method': this.methods.GET,
			'url': 'http://ipinfo.io/json',
		};
	}
	constructor(options = {}) {
		super(options);
	}
	parse(data) {
		this.response.ip = data.ip;
		this.response.countryName = countries.getName(data.country, "en");
		this.response.countryCode = data.country;
		this.response.region = data.region;
		this.response.city = data.city;
		this.response.isp = data.org;

		const loc = data.loc.split(",");
		this.response.lat = loc[0];
		this.response.lon = loc[1];
		
		return this.response.toObject();
	}
}
