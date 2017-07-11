const servicesPath = '../lib/services';

exports.testServices = function(test) {
	let services = [
		require(`${servicesPath}/ip-api-service`),
		require(`${servicesPath}/freegeoip-service`),
		require(`${servicesPath}/ipapi-co-service`),
		require(`${servicesPath}/ipinfo-service`),
		require(`${servicesPath}/nekudo-service`),
		require(`${servicesPath}/keycdn-service`),
	];
	services = services.map((service) => {
		return new service().run();
	});
	Promise.all(services)
		.then((values) => {
			values.forEach((res) => {
				test.ok(res.ip !== undefined, 'Should contain IP');
				test.ok(res.countryCode !== undefined, 'Should contain countryCode');
				test.ok(res.countryName !== undefined, 'Should contain countryName');
				test.ok(res.lat !== undefined, 'Should contain lat');
				test.ok(res.lon !== undefined, 'Should contain lon');
			});
			test.done();
		})
		.catch((err) => {
			test.ok(false, "Should not fail");
			test.done();
		});
};
