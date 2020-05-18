module.exports = {
	// The configuration settings for the OAS2 flow-node: Petstore HTTP
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'petstore-http-v7': {
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
