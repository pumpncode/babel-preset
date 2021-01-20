/**
 * @private
 */
module.exports = () => ({
	plugins: [
		"@babel/proposal-class-static-block",
		[
			"@babel/proposal-decorators",
			{
				decoratorsBeforeExport: false
			}
		],
		"@babel/proposal-do-expressions",
		"@babel/proposal-export-default-from",
		"@babel/proposal-export-namespace-from",
		"@babel/proposal-function-bind",
		"@babel/proposal-function-sent",
		"@babel/proposal-logical-assignment-operators",
		"@babel/proposal-partial-application",
		[
			"@babel/proposal-pipeline-operator",
			{
				proposal: "minimal"
			}
		],
		"@babel/proposal-private-property-in-object",
		"@babel/proposal-throw-expressions",
		"@babel/syntax-top-level-await"
	],
	presets: [
		[
			"@babel/env",
			{
				shippedProposals: true,
				targets: {
					esmodules: true,
					node: process.versions.node
				}
			}
		]
	]
});
