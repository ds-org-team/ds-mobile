import typescript from 'rollup-plugin-typescript2';
import svgicons from 'rollup-plugin-svg-icons';
import image from '@rollup/plugin-image';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'react-native-vector-icons/MaterialCommunityIcons',
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.build.json',
      typescript: require('typescript'),
    }),
    image(),
    svgicons({
      inputFolder: 'assets/icons',
    }),
  ],
};
