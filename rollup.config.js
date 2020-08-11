import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import sucrase from '@rollup/plugin-sucrase'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

const path = require('path')

export default {
  input: './src/index.ts',
  output: {
    file: './dist/nekohack-ui.js',
    format: 'iife',
    name: 'NekohackUI',
    indent: false,
    sourcemap: true,
    globals: {
      'preact': 'Preact',
      'preact-emotion': 'PreactEmotion'
    }
  },
  external: ['preact', 'preact-emotion'],
  plugins: [
    alias({
      'react': path.resolve(__dirname, 'node_modules/preact/dist/preact.js'),
      'react-dom': path.resolve(__dirname, 'node_modules/preact-compat/dist/preact-compat.js')
    }),
    resolve(),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx'],
      jsxPragma: 'h',
      jsxFragmentPragma: 'Fragment'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript(),
    terser(),
    scss()
  ],
  watch: {
    clearScreen: false
  }
}