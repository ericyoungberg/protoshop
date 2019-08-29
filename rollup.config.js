/**
 * Rollup Config
 *
 * Development: `yarn run start`
 * Production: `yarn run build`
 */


import scss from 'rollup-plugin-scss';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';


export default [

    {
        input: './index.js',

        output: {
            file: './dist/protoshop.min.js',
            format: 'iife',
            name: 'protoshop',
            indent: false,
            sourcemap: true,
        },

        plugins: [
            resolve(),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            replace({
                include: './index.js',
                delimiters: ['{{', '}}'],
                values: {
                    SET_VERSION: `protoshop.version = '${pkg.version}'`,
                },
            }),
            scss({
                output: './dist/protoshop.min.css',
            }),
            babel({ exclude: 'node_modules/**' }),
            terser(),
        ]
    },

];
