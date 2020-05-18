module.exports = {
	// The configuration settings for the OAS2 flow-node: MongoPractitionerWithArsHost.json
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'mongopractitionerwitharshost-json-v7': {
				// It is possible to override URI options when constructing
				// outbound requests to this service.
				uri: {
					// protocol: 'https',
					// host: 'hostname',
					// port: 443,
					// basePath: '/api'
				}
			}
		}
	}
};
