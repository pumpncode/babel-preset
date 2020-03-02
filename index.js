module.exports = () => ({
    "presets": [
        "@babel/preset-env",
        "@babel/preset-flow"
    ],
    "plugins": [
        "@babel/plugin-transform-flow-strip-types",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining",
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ]
    ]
});
