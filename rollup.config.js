import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/smart-editor.js',
    output: {
        file: 'dist/smart-editor.js',
        format: 'umd',
        name: 'SmartEditor'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        terser() // Minify the output
    ]
};