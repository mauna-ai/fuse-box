import * as path from 'path';
import { createContext } from '../../src/core/Context';
import { bundleDev } from '../../src/main/bundle_dev';

const ctx = createContext({
  target: 'browser',
  logging: {
    level: 'succinct',
  },
  watch: true,
  devServer: {
    httpServer: {
      port: 9999,
    },
  },
  sourceMap: true,

  // cache: {
  //   enabled: false,
  //   root: path.join(__dirname, '.cache'),
  // },
  cache: false,
  webIndex: {
    publicPath: '.',
  },
  //production: {},
  homeDir: path.join(__dirname, 'src'),
  entry: 'index.ts',
});

bundleDev(ctx);