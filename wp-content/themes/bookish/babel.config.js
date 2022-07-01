module.exports = function (api) {
    api.cache.never();
    const plugins = [
        [
            "@babel/plugin-transform-react-jsx",
            {
                "pragma": "h",
                "pragmaFrag": "Fragment"
            }
        ],
        "@babel/plugin-syntax-dynamic-import",
        [
            "@babel/plugin-proposal-decorators",
            {
                "decoratorsBeforeExport": true
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
        ],
        "@babel/plugin-proposal-nullish-coalescing-operator"
    ];
    const presets = [];

    return {
        plugins,
        presets,
    }
}
