    import commonjs from 'rollup-plugin-commonjs';
    import nodeResolve from 'rollup-plugin-node-resolve';
    import builtins from 'rollup-plugin-node-builtins';
    import globals from 'rollup-plugin-node-globals';
    import json from 'rollup-plugin-json';

    export default {
        intro: 'var ENVIRONMENT = "production";',
        entry: 'index.js',
        dest: 'bundle.js',
        moduleName: 'dat',
        format: 'iife',
        plugins: [

            builtins(),

            globals(),

            commonjs({
                // non-CommonJS modules will be ignored, but you can also
                // specifically include/exclude files
                include: [ "./index.js", "node_modules/**" ], // Default: undefined
                exclude: [ 'node_modules/aws-sign2/**', 'node_modules/hyperdrive-http/**' ],  // Default: undefined
            }),

            json(),

            nodeResolve({
                jsnext: true,
                main: false
            })
        ]
    };