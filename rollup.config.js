import resolve from '@rollup/plugin-node-resolve'
import sucrase from '@rollup/plugin-sucrase'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/nekohack-ui.js',
    format: 'umd',
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