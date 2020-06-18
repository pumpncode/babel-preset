module.exports = () => ({
    "comments": true,
	"plugins": [
		[
			"@babel/plugin-proposal-class-properties",
			{
				"loose": true
			}
		],
		[
			"@babel/plugin-proposal-private-methods",
			{
				"loose": true
			}
		],
		"@babel/plugin-proposal-export-default-from",
		"@babel/plugin-proposal-logical-assignment-operators",
		"@babel/plugin-proposal-partial-application",
		[
			"@babel/plugin-proposal-pipeline-operator",
			{
				"proposal": "minimal"
			}
		],
		"@babel/plugin-proposal-throw-expressions",
		[
			"@babel/plugin-proposal-private-property-in-object",
			{
				"loose": true
			}
		],
		[
			"@babel/plugin-syntax-module-attributes",
			{
				"version": "may-2020"
			}
		]
	],
	"presets": [
		[
			"@babel/preset-env",
			{
				"targets": {
					"node": "14"
				}
			}
		]
	]
});
