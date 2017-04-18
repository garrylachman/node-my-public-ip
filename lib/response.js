module.exports = class Response {
	constructor() {
		this.data = {};
	}
	toObject() {
		if ( ! this.data.region) {
			this.data.region = this.data.city;
		}
		return this.data;
	}
	set ip(val) {
		this.data.ip = val;
	}
	set countryName(val) {
		this.data.countryName = val;
	}
	set countryCode(val) {
		this.data.countryCode = val;
	}
	set region(val) {
		this.data.region = val;
	}
	set city(val) {
		this.data.city = val;
	}
	set timezone(val) {
		this.data.timezone = val;
	}
	set lat(val) {
		this.data.lat = val;
	}
	set lon(val) {
		this.data.lon = val;
	}
	set isp(val) {
		this.data.isp = val;
	}
	set continent(val) {
		this.data.continent = val;
	}
}
