module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@controllers': './src/controllers',
                '@routes': './src/routes',
                '@app': './src/app.js',
                '@database': './src/database',
                '@config': './src/config',
                '@middlewares': './src/middlewares',
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
};
