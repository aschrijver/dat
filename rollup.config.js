    import commonjs from 'rollup-plugin-commonjs';
    import nodeResolve from 'rollup-plugin-node-resolve';
    import json from 'rollup-plugin-json';

    export default {
        entry: 'index.js',
        dest: 'bundle.js',
        format: 'iife',

        //  required, or results in Error: Could not load crypto. No such file or directory, open 'crypto'
        external: ['crypto'],
        
        plugins: [

            commonjs({
                // non-CommonJS modules will be ignored, but you can also
                // specifically include/exclude files
                include: [ "./index.js", "node_modules/**" ] // Default: undefined
            }),

            json(),

            nodeResolve({
                jsnext: true,
                main: false
            })
        ]
    };